/**
 * 访问追踪 API (Vercel兼容版本)
 */
export default async function handler(req, res) {
  // 简单记录（实际可配合分析工具）
  const { path, referrer, timestamp } = req.body;
  
  // 在服务器环境可记录日志
  console.log(`[Track] ${new Date(timestamp).toISOString()} - ${path} from ${referrer}`);
  
  return res.status(200).json({ success: true });
}
