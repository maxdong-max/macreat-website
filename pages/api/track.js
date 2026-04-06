/**
 * 访问追踪 API
 * 记录：IP、访问页面、停留时间、来源、点击行为等
 */
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'analytics.json');

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
         req.headers['x-real-ip'] ||
         req.connection?.remoteAddress ||
         'unknown';
}

function readAnalytics() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch (e) {
    console.error('Error reading analytics:', e);
  }
  return [];
}

function writeAnalytics(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error writing analytics:', e);
  }
}

export default async function handler(req, res) {
  const { method } = req;
  
  if (method === 'POST') {
    const ip = getClientIp(req);
    const userAgent = req.headers['user-agent'] || '';
    const {
      type,           // 'pageview' | 'stay' | 'click' | 'form' | 'social'
      path: pagePath,
      referrer,
      stayDuration,   // 停留时间（秒）
      clickType,      // 点击类型：'contact' | 'whatsapp' | 'email' | 'facebook' | 'youtube' | 'instagram' | 'twitter'
      formData,       // 表单数据（不含敏感信息）
      timestamp = Date.now()
    } = req.body;

    const analytics = readAnalytics();
    
    // 查找同一IP的最近会话
    let session = analytics.find(a => 
      a.ip === ip && 
      a.status === 'active' &&
      (Date.now() - a.lastActive) < 30 * 60 * 1000 // 30分钟内为同一会话
    );

    if (type === 'pageview') {
      if (!session) {
        session = {
          id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
          ip,
          userAgent,
          referrer,
          firstVisit: timestamp,
          lastActive: timestamp,
          status: 'active',
          pages: [],
          clicks: [],
          forms: []
        };
        analytics.unshift(session);
      }
      
      session.pages.push({
        path: pagePath,
        timestamp,
        stayDuration: 0
      });
      session.lastActive = timestamp;
    }
    
    if (type === 'stay' && session) {
      const lastPage = session.pages[session.pages.length - 1];
      if (lastPage && lastPage.path === pagePath) {
        lastPage.stayDuration = stayDuration;
        lastPage.exitTime = timestamp;
      }
    }
    
    if (type === 'click') {
      if (!session) {
        session = {
          id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
          ip,
          userAgent,
          referrer,
          firstVisit: timestamp,
          lastActive: timestamp,
          status: 'active',
          pages: [],
          clicks: [],
          forms: []
        };
        analytics.unshift(session);
      }
      
      session.clicks.push({
        clickType,
        timestamp,
        page: pagePath
      });
      session.lastActive = timestamp;
    }
    
    if (type === 'form' && session) {
      session.forms.push({
        timestamp,
        page: pagePath,
        hasMessage: !!formData?.message,
        country: formData?.country
      });
      session.lastActive = timestamp;
    }
    
    // 标记不活跃的会话（超过30分钟）
    analytics.forEach(a => {
      if (a.status === 'active' && (Date.now() - a.lastActive) > 30 * 60 * 1000) {
        a.status = 'inactive';
        a.totalDuration = a.lastActive - a.firstVisit;
      }
    });

    writeAnalytics(analytics);
    
    return res.status(200).json({ success: true });
  }

  // GET 只返回统计数据，不返回原始明细
  if (method === 'GET') {
    const analytics = readAnalytics();
    const now = Date.now();
    
    // 今日数据
    const todayStart = new Date().setHours(0, 0, 0, 0);
    const todayViews = analytics.filter(a => 
      a.pages?.some(p => p.timestamp >= todayStart)
    ).length;
    
    // 总数据
    const totalVisits = analytics.length;
    const totalPageViews = analytics.reduce((sum, a) => sum + (a.pages?.length || 0), 0);
    const uniqueIps = [...new Set(analytics.map(a => a.ip))].length;
    
    // 点击统计
    const clickStats = {
      whatsapp: analytics.reduce((sum, a) => sum + (a.clicks?.filter(c => c.clickType === 'whatsapp').length || 0), 0),
      email: analytics.reduce((sum, a) => sum + (a.clicks?.filter(c => c.clickType === 'email').length || 0), 0),
      facebook: analytics.reduce((sum, a) => sum + (a.clicks?.filter(c => c.clickType === 'facebook').length || 0), 0),
      youtube: analytics.reduce((sum, a) => sum + (a.clicks?.filter(c => c.clickType === 'youtube').length || 0), 0),
      instagram: analytics.reduce((sum, a) => sum + (a.clicks?.filter(c => c.clickType === 'instagram').length || 0), 0),
      twitter: analytics.reduce((sum, a) => sum + (a.clicks?.filter(c => c.clickType === 'twitter').length || 0), 0),
    };
    
    // 表单提交统计
    const formSubmits = analytics.reduce((sum, a) => sum + (a.forms?.length || 0), 0);
    
    // 热门页面
    const pageCounts = {};
    analytics.forEach(a => {
      a.pages?.forEach(p => {
        pageCounts[p.path] = (pageCounts[p.path] || 0) + 1;
      });
    });
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([path, count]) => ({ path, count }));
    
    return res.status(200).json({
      summary: {
        todayViews,
        totalVisits,
        totalPageViews,
        uniqueIps,
        clickStats,
        formSubmits,
        topPages
      }
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}