# 网站状态记录 - 2026-04-04

> 用于溯源和未来升级参考

---

## 部署信息

| 项目 | 值 |
|------|-----|
| **网站 URL** | https://workspace-shrimp-publish.vercel.app |
| **Admin URL** | https://workspace-shrimp-publish.vercel.app/admin |
| **Admin 账号** | admin |
| **Admin 密码** | macreat2024 |
| **部署平台** | Vercel (免费版) |
| **项目名称** | maxdong-maxs-projects/workspace-shrimp-publish |

---

## 技术栈

- **框架**：Next.js (Pages Router)
- **样式**：CSS Modules
- **后端**：Node.js (API Routes) + admin/server.js
- **部署**：Vercel

---

## 页面结构

| 页面 | 路由 | 状态 |
|------|------|------|
| 首页 | `/` | ✅ 正常 |
| 关于我们 | `/about-macreat/` | ✅ 正常 |
| 机器产品 | `/machine/` | ✅ 正常 |
| 案例展示 | `/case/` | ✅ 正常 |
| 新闻资讯 | `/news/` | ✅ 正常 |
| 解决方案 | `/solution/` | ✅ 正常 |
| 联系我们 | `/contact/` | ✅ 正常 |
| 成为经销商 | `/become-our-dealer/` | ✅ 正常 |
| E-book 下载 | `/base_message/` | ✅ 正常 |
| 优惠券 | `/project_message/` | ✅ 正常 |
| 管理员后台 | `/admin/` | ✅ 正常 |

---

## 功能特性

### ✅ 已实现
- 首页轮播/英雄区
- 产品展示（木材颗粒机）
- 案例展示
- FAQ 手风琴
- 联系表单（API: /api/contact）
- 联系信息（WhatsApp、电话、邮箱）
- Sitemap.xml
- Robots.txt
- 管理员后台（JWT 认证）

### ⚠️ 待改进
- 电话号码 +86-18615207548 - 代码已修正，等待部署
- 部分页面动画效果
- SEO 优化（meta tags）
- 图片优化（懒加载、压缩）

---

## 联系方式

| 渠道 | 内容 |
|------|------|
| WhatsApp | +86-18615207548 |
| 电话 | +86-18615207548 |
| 邮箱 | pellet@macreat.com |

---

## 文件结构

```
/workspace-shrimp-publish/
├── pages/              # Next.js 页面
│   ├── index.js        # 首页
│   ├── about-macreat.js
│   ├── machine.js
│   ├── case.js
│   ├── news.js
│   ├── solution.js
│   ├── contact.js
│   ├── become-our-dealer.js
│   ├── base_message.js     # E-book 页面
│   └── project_message.js  # 优惠券页面
├── components/         # React 组件
├── lib/               # 工具库
│   └── content.js     # 网站内容配置
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── images/
├── admin/             # 管理员后台
│   ├── server.js      # API 后端
│   └── public/admin/  # 静态文件
└── styles/            # CSS 样式
```

---

## API 端点

| 端点 | 方法 | 功能 |
|------|------|------|
| `/api/contact` | POST | 联系表单提交 |
| `/api/admin/login` | POST | 管理员登录 (JWT) |
| `/api/admin/products` | GET/POST | 产品管理 |
| `/api/admin/cases` | GET/POST | 案例管理 |
| `/api/admin/news` | GET/POST | 新闻管理 |

---

## 历史提交

| Commit | 日期 | 说明 |
|--------|------|------|
| 13db60b | 2026-04-04 | fix: correct phone number to +86-18615207548 |
| 1368e2f | 2026-04-04 | fix: update sitemap and robots to use correct domain |
| aab68f2 | 2026-04-04 | fix: use dynamic API origin in admin panel |
| 94c3075 | 2026-04-04 | feat: add base_message and project_message pages |

---

## 已知问题

1. ⏳ 电话号码显示 - 已修复代码，等待部署生效
2. Vercel 部署限制 - 免费版每天 100 次

---

## 未来升级建议

1. **SEO 优化**
   - 添加更多 meta tags
   - Open Graph 标签
   - JSON-LD 结构化数据

2. **性能优化**
   - 图片懒加载
   - 静态资源 CDN
   - 页面预渲染

3. **功能增强**
   - 多语言支持 (i18n)
   - 博客系统
   - 在线客服聊天
   - 产品搜索/过滤

4. **用户体验**
   - 移动端优化
   - 页面动画
   - 表单验证增强

5. **管理后台**
   - 图片上传功能
   - 内容预览
   - 数据统计

---

*最后更新：2026-04-04*
*记录人：openclaw*