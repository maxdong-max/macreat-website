import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { db, logOperation } from "@/lib/db"

const JWT_SECRET = process.env.JWT_SECRET || "macreat-admin-secret-2024"

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    const userAgent = req.headers.get("user-agent") || "unknown"

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password required" },
        { status: 400 }
      )
    }

    const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username) as any

    if (!user) {
      logOperation({
        username,
        action: "LOGIN_FAILED",
        details: "User not found",
        ip,
        user_agent: userAgent
      })
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      logOperation({
        username,
        action: "LOGIN_FAILED",
        details: "Invalid password",
        ip,
        user_agent: userAgent
      })
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    )

    logOperation({
      username: user.username,
      action: "LOGIN_SUCCESS",
      ip,
      user_agent: userAgent
    })

    return NextResponse.json({
      token,
      user: { id: user.id, username: user.username, role: user.role }
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}