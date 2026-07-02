# 张琦 · Resume

Java 高级开发 / AI 应用开发工程师的个人简历网站。沿用 [MATH_BOOK](https://moocstudent.github.io/MATH_BOOK/) 同款设计系统（米色纸感 + 大号衬线 + 无构建 React SPA）。

## 本地运行

无需构建、无需安装依赖。任意静态服务器即可：

```bash
python -m http.server 5630 --directory D:/webcode/resume
# 浏览器打开 http://localhost:5630
```

## 文件结构

```
index.html    入口（React + Babel CDN）
styles.css    设计系统
i18n.jsx      中英文字典
data.jsx      简历数据（经历、项目、技能、教育）
pages.jsx     页面组件
app.jsx       路由 · 主题 · 顶栏
```

## 功能

- 概览 / 经历 / 项目 / 技能 / 关于 五个页面（Hash 路由）
- 一键中英切换、明暗主题
- 技能关键词滚动条（Ticker）
- 纯静态，可部署到 GitHub Pages

## 部署

推送到 GitHub 后，在仓库 Settings → Pages 选择 main 分支即可。

## 许可

MIT
