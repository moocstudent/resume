/* =========================================================
   i18n — Chinese / English switching
   ========================================================= */

const LANG_KEY = "resume_lang";

const LangContext = React.createContext("zh");

function useLangState() {
  const [lang, setLangRaw] = React.useState(() => {
    try { return localStorage.getItem(LANG_KEY) || "zh"; } catch (e) { return "zh"; }
  });
  React.useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);
  const setLang = (l) => {
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    setLangRaw(l);
  };
  const toggle = () => setLang(lang === "zh" ? "en" : "zh");
  return [lang, setLang, toggle];
}

function useLang() { return React.useContext(LangContext); }

function useT() {
  const lang = React.useContext(LangContext);
  return (key) => {
    const e = UI[key];
    if (e === undefined) return key;
    if (typeof e === "object") return e[lang] !== undefined ? e[lang] : e.zh;
    return e;
  };
}

function pick(lang, obj) {
  if (obj === null || obj === undefined) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] !== undefined ? obj[lang] : (obj.zh !== undefined ? obj.zh : (obj.en || ""));
}

function fmt(str, vars) {
  if (!str) return "";
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : _));
}

const UI = {
  brand_word:      { zh: "张琦", en: "Zhang Qi" },
  nav_home:        { zh: "概览", en: "Overview" },
  nav_experience:  { zh: "经历", en: "Experience" },
  nav_projects:    { zh: "项目", en: "Projects" },
  nav_skills:      { zh: "技能", en: "Skills" },
  nav_about:       { zh: "关于", en: "About" },
  theme_title:     { zh: "切换明暗", en: "Toggle theme" },
  lang_title:      { zh: "Switch to English", en: "切换到中文" },

  hero_badge:      { zh: "RESUME v1.0 · 2026", en: "RESUME v1.0 · 2026" },
  hero_l1:         { zh: "Java 高级开发", en: "Senior Java" },
  hero_l2a:        { zh: "· AI 应用", en: "& AI App" },
  hero_l2b:        { zh: "开发工程师", en: "Developer" },
  hero_sub: {
    zh: "微服务架构 · Spring Cloud · Python · Vue · AI Agent · MCP · Agentic RAG。{Y} 年开发经验，{P} 个项目交付，带过 {T} 人团队。",
    en: "Microservices · Spring Cloud · Python · Vue · AI Agents · MCP · Agentic RAG. {Y} years of experience, {P} projects delivered, led a team of {T}.",
  },
  cta_experience:  { zh: "查看工作经历 →", en: "View experience →" },
  cta_projects:    { zh: "浏览项目集 ↓", en: "Browse projects ↓" },
  cta_contact:     { zh: "联系我", en: "Contact" },

  meta_years:      { zh: "年经验", en: "Years" },
  meta_projects:   { zh: "项目", en: "Projects" },
  meta_team:       { zh: "人团队", en: "Team size" },
  meta_certs:      { zh: "证书", en: "Certs" },

  sec_experience:  { zh: "工作经历", en: "Work Experience" },
  sec_projects:    { zh: "项目经历", en: "Projects" },
  sec_personal:    { zh: "个人研发", en: "Side Projects" },
  sec_skills:      { zh: "技术栈", en: "Tech Stack" },
  sec_education:   { zh: "教育背景", en: "Education" },
  sec_certs:       { zh: "证书荣誉", en: "Certificates" },
  sec_about:       { zh: "自我评价", en: "About Me" },
  sec_links:       { zh: "相关链接", en: "Links" },

  role_label:      { zh: "职责", en: "Role" },
  stack_label:     { zh: "技术栈", en: "Stack" },
  scope_label:     { zh: "工作范畴", en: "Scope" },
  desc_label:      { zh: "简介", en: "Summary" },
  open_source:     { zh: "开源", en: "Open source" },
  live_demo:       { zh: "在线演示", en: "Live demo" },
  present:         { zh: "至今", en: "Present" },
  contact_email:   { zh: "邮箱", en: "Email" },
  contact_phone:   { zh: "电话", en: "Phone" },
  contact_codewars:{ zh: "算法等级", en: "Codewars" },

  about_p1: {
    zh: "带过小团队 10 人，跨部门沟通 40 人。喜欢程序开发，经常记录博客。喜欢骑行与音乐，喜欢挑战自我，有从军经历。",
    en: "Led a team of 10 and coordinated across 40 people. Passionate about coding and blogging. Enjoy cycling and music. Military service background.",
  },
  about_p2: {
    zh: "从 Java（Spring Boot → Spring Cloud → Vert.x）到 Python（Django REST），前端从 EasyUI 到 Vue、Ant Design Vue、Angular 均有涉猎。带过多个微服务项目，从 Zookeeper/Dubbo 到 Nacos/Gateway，处理过高并发与百万级 SQL 优化。",
    en: "Full-stack breadth: Java (Spring Boot/Cloud/Vert.x), Python (Django REST), front-end (EasyUI → Vue → Ant Design Vue → Angular). Multiple microservice architectures from Dubbo/Zookeeper to Nacos/Gateway. High-concurrency and million-row SQL optimization experience.",
  },
  about_p3: {
    zh: "熟悉 Cursor、Claude Code 等 AI 编程工具，开发过 MCP 对接，本地使用 Ollama 接入 Claude Code。在职期间持续学习金融、AI 等跨领域知识。",
    en: "Proficient with Cursor, Claude Code, and MCP integrations. Uses Ollama locally with Claude Code. Continuously learning finance, AI, and adjacent domains.",
  },

  footer_note:     { zh: "静态简历站 · 无构建 React SPA", en: "Static resume · no-build React SPA" },
};
