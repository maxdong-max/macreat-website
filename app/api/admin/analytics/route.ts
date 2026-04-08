import { NextRequest, NextResponse } from "next/server"
import jwt, { JwtPayload } from "jsonwebtoken"
import { db } from "@/lib/db"

const JWT_SECRET = process.env.JWT_SECRET || "macreat-admin-secret-2024"

function authMiddleware(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  if (!token) return null
  try { const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload; return decoded as { username: string } } catch { return null }
}

export async function GET(req: NextRequest) {
  const user = authMiddleware(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  
  try {
    const { searchParams } = new URL(req.url)
    const days = parseInt(searchParams.get("days") || "7")
    
    const since = new Date()
    since.setDate(since.getDate() - days)
    
    // 获取日志数据
    const logs = db.prepare(`
      SELECT path, ip, created_at, browser, os, device, language, timezone,
             referrer, source, medium, campaign, search_engine, stay_duration
      FROM analytics 
      WHERE created_at >= ? 
      ORDER BY created_at DESC 
      LIMIT 1000
    `).all(since.toISOString()) as { ip: string; stay_duration?: number; [key: string]: any }[]
    
    // 计算统计数据
    const totalVisits = logs.length
    const uniqueIps = new Set(logs.map(l => l.ip)).size
    
    const stayDurations = logs.map(l => l.stay_duration || 0).filter(d => d > 0)
    const avgStayDuration = stayDurations.length > 0 
      ? Math.round(stayDurations.reduce((a, b) => a + b, 0) / stayDurations.length)
      : 0
    
    // 跳出率（单页访问）
    const bounceRate = totalVisits > 0 
      ? Math.round((logs.filter(l => (l.stay_duration || 0) < 10).length / totalVisits) * 100)
      : 0
    
    // 来源统计
    const trafficSources: Record<string, number> = {}
    const trafficMediums: Record<string, number> = {}
    const searchEngines: Record<string, number> = {}
    const browsers: Record<string, number> = {}
    const operatingSystems: Record<string, number> = {}
    const devices: Record<string, number> = {}
    const languages: Record<string, number> = {}
    const timezones: Record<string, number> = {}
    const topCountries: Record<string, number> = {}
    const topPages: { path: string; count: number }[] = []
    const pageCounts: Record<string, number> = {}
    
    logs.forEach(l => {
      if (l.source) trafficSources[l.source] = (trafficSources[l.source] || 0) + 1
      if (l.medium) trafficMediums[l.medium] = (trafficMediums[l.medium] || 0) + 1
      if (l.search_engine) searchEngines[l.search_engine] = (searchEngines[l.search_engine] || 0) + 1
      if (l.browser) browsers[l.browser] = (browsers[l.browser] || 0) + 1
      if (l.os) operatingSystems[l.os] = (operatingSystems[l.os] || 0) + 1
      if (l.device) devices[l.device] = (devices[l.device] || 0) + 1
      if (l.language) languages[l.language] = (languages[l.language] || 0) + 1
      if (l.timezone) timezones[l.timezone] = (timezones[l.timezone] || 0) + 1
      
      if (l.path) {
        pageCounts[l.path] = (pageCounts[l.path] || 0) + 1
      }
    })
    
    // 热门页面
    Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .forEach(([path, count]) => {
        topPages.push({ path, count })
      })
    
    // 点击统计（从 click_type 字段）
    const clickStats: Record<string, number> = {}
    logs.forEach(l => {
      if (l.click_type) {
        clickStats[l.click_type] = (clickStats[l.click_type] || 0) + 1
      }
    })
    
    // 表单提交（暂时没有专门字段，设为0）
    const formSubmits = 0
    
    const summary = {
      totalVisits,
      totalPageViews: totalVisits,
      uniqueIps,
      avgStayDuration,
      bounceRate,
      clickStats,
      formSubmits,
      topPages,
      trafficSources,
      trafficMediums,
      searchEngines,
      browsers,
      operatingSystems,
      devices,
      languages,
      timezones,
      topCountries
    }
    
    return NextResponse.json({ logs, summary })
  } catch (err) {
    console.error('Analytics API error:', err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}