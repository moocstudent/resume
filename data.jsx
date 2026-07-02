/* =========================================================
   Resume Data — 张琦
   ========================================================= */

const PROFILE = {
  name: { zh: "张琦", en: "Zhang Qi" },
  gender: { zh: "男", en: "Male" },
  age: 38,
  phone: "13864397123",
  email: "implementsteam@163.com",
  roles: {
    zh: "Java 高级开发工程师 / AI 应用开发工程师 / 软件技术经理",
    en: "Senior Java Developer / AI Application Developer / Software Tech Manager",
  },
  codewars: "https://www.codewars.com/users/g04-ukyo",
  keywords: [
    "Java", "Spring Cloud", "Python", "Vue", "Microservices",
    "AI Agent", "MCP", "Agentic RAG", "YOLO26", "FreeSwitch",
    "Django", "Kotlin", "MySQL", "Redis", "Docker",
  ],
};

const STATS = { years: 10, projects: 40, team: 10, certs: 30 };

const WORK_EXPERIENCE = [
  {
    id: "w1",
    period: "2023.02 — 2026.07",
    company: { zh: "开发山东工作", en: "Shandong Dev (Contract)" },
    title: { zh: "Java 高级开发 / 技术负责人", en: "Senior Java Dev / Tech Lead" },
    highlights: {
      zh: [
        "航空信息监测平台、无人机信息监测平台",
        "劳动者工会多平台重构优化",
        "通用模块框架搭建（Spring Boot 基层 + 定时任务/工作流/MQ）",
        "研学基地管理系统 / Maxkey 单点登录维护",
        "商城系统、类携程 App、北美双语按摩 SaaS",
        "健身房加盟官网 CMS 重做、YOLO26 人脸识别",
        "FreeSwitch 客服系统构建",
      ],
      en: [
        "Aviation & drone monitoring platforms",
        "Labor union multi-platform refactor",
        "Shared module framework (Spring Boot + jobs/workflow/MQ)",
        "Research-base management / Maxkey SSO maintenance",
        "E-commerce, travel-style app, bilingual massage SaaS",
        "Gym franchise CMS rebuild, YOLO26 face recognition",
        "FreeSwitch customer-service system",
      ],
    },
  },
  {
    id: "w2",
    period: "2019.01 — 2023.01",
    company: { zh: "上海华钛科技", en: "Shanghai Huatai Tech" },
    title: { zh: "Java 开发工程师", en: "Java Developer" },
    highlights: {
      zh: [
        "企业微信二次开发（Vert.x / RxJava2 / R2DBC / WebFlux）",
        "银行再融担系统、基金估值与邮件分拣模块",
        "浦东红十字捐助系统、同济答题系统",
        "市场零售系统、电商订货系统（Seata 分布式事务）",
        "数据同步中心（Spring Cloud + db-scheduler）",
        "移动摄像管理系统、心理咨询诊断系统（Python Django）",
        "残疾儿童机构管理系统",
      ],
      en: [
        "WeCom secondary dev (Vert.x / RxJava2 / R2DBC / WebFlux)",
        "Bank re-guarantee system, fund valuation & email sorting",
        "Pudong Red Cross donation, Tongji quiz system",
        "Retail system, e-commerce ordering (Seata distributed tx)",
        "Data sync hub (Spring Cloud + db-scheduler)",
        "Camera & psychology systems (Python Django)",
        "Disabled children institution management",
      ],
    },
  },
  {
    id: "w3",
    period: "2016.02 — 2018.11",
    company: { zh: "淄博方达电子商务园 · 通达乐网络科技", en: "Zibo Fangda E-commerce / Tongdale Tech" },
    title: { zh: "技术支持", en: "Technical Support" },
    highlights: {
      zh: [
        "全景云平台 Linux 服务器维护与项目部署（PHP / MySQL）",
        "全景拍摄制作与公司官网维护",
      ],
      en: [
        "Panorama cloud platform Linux ops & deployment (PHP / MySQL)",
        "360° panorama production & corporate website maintenance",
      ],
    },
  },
];

const PROJECTS = [
  {
    id: "p1",
    period: "2026.05 — 2026.07",
    title: { zh: "健身房加盟商家系统优化", en: "Gym Franchise System Optimization" },
    role: { zh: "前端及后端", en: "Full-stack" },
    stack: "Vue3 · Java · Spring Boot · YOLO26",
    scope: {
      zh: ["Vue3 官网页面实现", "对接开源 CMS 并改造", "代码架构与样板代码优化", "YOLO26 人脸识别实现"],
      en: ["Vue3 corporate site", "Open-source CMS integration", "Code architecture refactor", "YOLO26 face recognition"],
    },
    featured: true,
  },
  {
    id: "p2",
    period: "2026.05 — 2026.06",
    title: { zh: "健身房加盟商家客服系统", en: "Gym Franchise Call Center" },
    role: { zh: "前后端", en: "Full-stack" },
    stack: "FreeSwitch · Vue · React · Java",
    scope: {
      zh: ["与商家沟通需求任务", "Web Phone 本地拨通测试与第三方数据对接"],
      en: ["Requirements with merchants", "Web Phone testing & third-party integration"],
    },
    featured: true,
  },
  {
    id: "p3",
    period: "2025.12 — 2026.04",
    title: { zh: "按摩店管理系统 SaaS", en: "Massage Shop SaaS (North America)" },
    role: { zh: "后端及项目管理", en: "Backend & PM" },
    stack: "Java · yudao-cloud · Vue3 · uniapp · Stripe",
    scope: {
      zh: [
        "Google 评论功能整体编码与 AI 回复对接",
        "联盟营销推广：提成规则、营销员角色、推荐码",
        "角色数据权限重构、支付业务修复完善",
        "AI 自动化需求管理管控",
      ],
      en: [
        "Google reviews feature & AI reply integration",
        "Affiliate marketing: commission rules, roles, referral codes",
        "Role-based data permission refactor, payment fixes",
        "AI-driven requirement management",
      ],
    },
    featured: true,
  },
  {
    id: "p4",
    period: "2025.12 — 2026.02",
    title: { zh: "类携程 App 及后台", en: "Travel-style App & Admin" },
    role: { zh: "后端及 App 参与", en: "Backend & App" },
    stack: "Java · 微服务 · 多租户 · Feign · MyBatis",
    scope: {
      zh: ["二级营销推广转换收益模块", "营销规则设置、业务员业绩统计", "与积分/支付模块对接"],
      en: ["Two-tier affiliate conversion module", "Marketing rules & sales stats", "Points & payment integration"],
    },
  },
  {
    id: "p5",
    period: "2025.08 — 2025.12",
    title: { zh: "商城系统", en: "E-commerce Platform" },
    role: { zh: "后端", en: "Backend" },
    stack: "Java · 单体 · 多租户 · MySQL",
    scope: {
      zh: ["订单支付回调、二维码生图、用户门店绑定", "用户钱包设计、扣款同步", "部署文档编写"],
      en: ["Payment callbacks, QR codes, store binding", "Wallet design & debit sync", "Deployment docs"],
    },
  },
  {
    id: "p6",
    period: "2025.04 — 2025.08",
    title: { zh: "研学基地管理系统 / SSO", en: "Research Base Management / SSO" },
    role: { zh: "后端主导", en: "Backend Lead" },
    stack: "Java · ruoyi-vue-plus · MySQL · MinIO · Sentry",
    scope: {
      zh: ["设施统计、租赁管理、小程序对接", "SNMP 硬件对接、闸机扫码开门", "CI/CD 持续部署、MinIO、Sentry", "Maxkey 单点登录维护"],
      en: ["Facility stats, rental, mini-program", "SNMP hardware, gate QR access", "CI/CD, MinIO, Sentry", "Maxkey SSO maintenance"],
    },
  },
  {
    id: "p7",
    period: "2025.01 — 2025.03",
    title: { zh: "通用模块框架搭建", en: "Shared Module Framework" },
    role: { zh: "后端主导", en: "Backend Lead" },
    stack: "Spring Boot · 定时任务 · 工作流 · MQ",
    scope: {
      zh: ["公司业务通用模块抽离与重写", "定时任务、工作流、聊天协议、消息队列、并发优化"],
      en: ["Extract & rewrite shared business modules", "Jobs, workflow, chat protocol, MQ, concurrency patterns"],
    },
  },
  {
    id: "p8",
    period: "2022.04 — 2022.09",
    title: { zh: "电商订货系统", en: "E-commerce Ordering System" },
    role: { zh: "全程", en: "End-to-end" },
    stack: "Spring Cloud · Seata · MyBatis Plus · JMeter",
    scope: {
      zh: ["购物车、订单支付、库存分布式事务", "JMeter 高并发测试", "后付费按需账单生成"],
      en: ["Cart, orders, inventory distributed tx", "JMeter load testing", "Post-paid billing"],
    },
  },
  {
    id: "p9",
    period: "2021.02 — 2021.06",
    title: { zh: "银行保险担保系统", en: "Bank Insurance Guarantee System" },
    role: { zh: "全程", en: "End-to-end" },
    stack: "Spring Boot · Activiti · MySQL · MinIO · Quartz",
    scope: {
      zh: ["Activiti 工作流：贷款/还款/分担/追缴", "策略模式改善 Excel/流程/节点处理", "Excel 导入导出"],
      en: ["Activiti workflow: loan/repay/share/recovery", "Strategy pattern for Excel/workflow nodes", "Excel import/export"],
    },
  },
  {
    id: "p10",
    period: "2020.06 — 2020.10",
    title: { zh: "企业微信二次开发", en: "WeCom Secondary Development" },
    role: { zh: "参与", en: "Contributor" },
    stack: "Kotlin · Java · Vert.x · RxJava2 · R2DBC · WebFlux",
    scope: {
      zh: ["用户/用户群/事件回调跑批存库", "Consul 注册中心 + Gateway 网关微服务架构"],
      en: ["User/group/event callback batch processing", "Consul + Gateway microservice architecture"],
    },
  },
];

const PERSONAL_PROJECTS = [
  {
    id: "s1",
    title: { zh: "TaskSaas 项目管理工具", en: "TaskSaas Project Management" },
    stack: "Python · Django · MySQL · Docker · GitLab CI/CD",
    link: "https://gitee.com/createmaker/TaskSaas-v1.1.0",
    desc: {
      zh: "Milestone、用户故事、Task/Bug 管理，内置 GitLab 对接与 CICD，聊天与任务推送提醒。已给公司部署使用。",
      en: "Milestones, user stories, tasks/bugs, GitLab CI/CD integration, chat & push notifications. Deployed in production.",
    },
  },
  {
    id: "s2",
    title: { zh: "Task AI 版本", en: "Task AI Edition" },
    stack: "Django · AI Skill · MCP · Claude Code",
    desc: {
      zh: "AI 赋能项目管控，COCOMO 工时估计，甘特图导入，Hermes(DeepSeek) 需求拆解，可对接 Claude Code。",
      en: "AI-powered project control, COCOMO estimation, Gantt import, Hermes(DeepSeek) requirement breakdown, Claude Code integration.",
    },
  },
  {
    id: "s3",
    title: { zh: "Spring AI Alibaba 聊天 Agent", en: "Spring AI Alibaba Chat Agent" },
    stack: "Spring AI · Agentic RAG · Milvus · React · Obsidian",
    desc: {
      zh: "对接本地 Ollama 或 Hermes 网关，内容解析存档为 MD 结合 Obsidian 知识库，Agentic RAG 优化检索。",
      en: "Ollama/Hermes gateway, content parsed to MD + Obsidian KB, Agentic RAG for retrieval optimization.",
    },
  },
  {
    id: "s4",
    title: { zh: "自学网站系列", en: "Self-study Site Series" },
    stack: "GitHub Pages · Firebase · React SPA",
    links: [
      { label: "MATH_BOOK", url: "https://moocstudent.github.io/MATH_BOOK/" },
      { label: "AI_BOOK", url: "https://moocstudent.github.io/AI_BOOK/" },
      { label: "ENGLISH_BOOK", url: "https://moocstudent.github.io/ENGLISH_BOOK/" },
    ],
    desc: {
      zh: "AI 时代巩固基础的学习网站，支持注册登录、书签与进度同步。",
      en: "Bilingual learning sites with registration, bookmarks, and progress sync.",
    },
  },
];

const SKILL_GROUPS = [
  {
    id: "lang",
    title: { zh: "语言 & 框架", en: "Languages & Frameworks" },
    items: {
      zh: ["Java · Spring Boot/Cloud · Python Django · Vue · Kotlin · Angular · EasyUI"],
      en: ["Java · Spring Boot/Cloud · Python Django · Vue · Kotlin · Angular · EasyUI"],
    },
  },
  {
    id: "arch",
    title: { zh: "架构 & 性能", en: "Architecture & Performance" },
    items: {
      zh: ["微服务 · 分布式事务(Seata) · 高并发 · SQL 百万级优化 · Vert.x · gRPC · WebFlux · R2DBC"],
      en: ["Microservices · Distributed tx (Seata) · High concurrency · Million-row SQL tuning · Vert.x · gRPC · WebFlux · R2DBC"],
    },
  },
  {
    id: "db",
    title: { zh: "数据库 & 缓存", en: "Database & Cache" },
    items: {
      zh: ["MySQL · Oracle · PostgreSQL · Redis · MongoDB · MyBatis/MyBatis Plus · JPA"],
      en: ["MySQL · Oracle · PostgreSQL · Redis · MongoDB · MyBatis/MyBatis Plus · JPA"],
    },
  },
  {
    id: "ops",
    title: { zh: "运维 & 平台", en: "DevOps & Platforms" },
    items: {
      zh: ["Linux · Docker · Jenkins · GitLab · Nacos · Jpom CI/CD · 阿里云 · Azure · 华为云 · Sentry"],
      en: ["Linux · Docker · Jenkins · GitLab · Nacos · Jpom CI/CD · Aliyun · Azure · Huawei Cloud · Sentry"],
    },
  },
  {
    id: "ai",
    title: { zh: "AI 能力", en: "AI Capabilities" },
    items: {
      zh: ["Cursor · Claude Code · MCP 开发 · Agentic RAG · Ollama · YOLO26 · Spring AI Alibaba"],
      en: ["Cursor · Claude Code · MCP dev · Agentic RAG · Ollama · YOLO26 · Spring AI Alibaba"],
    },
  },
  {
    id: "other",
    title: { zh: "其他", en: "Other" },
    items: {
      zh: ["设计模式 · 算法(Codewars 出题级) · 微信支付 · FreeSwitch · 企业微信/微信平台二开 · JMeter"],
      en: ["Design patterns · Algorithms (Codewars author level) · WeChat Pay · FreeSwitch · WeCom/WeChat dev · JMeter"],
    },
  },
];

const EDUCATION = [
  {
    period: "2026.06 —",
    school: { zh: "在职研究生", en: "Part-time Graduate" },
    degree: { zh: "MBA · 硕士", en: "MBA · Master's" },
  },
  {
    period: "2023.02 — 2026.01",
    school: { zh: "上海复旦大学（夜大）", en: "Fudan University (Evening)" },
    degree: { zh: "金融学 · 本科", en: "Finance · Bachelor's" },
  },
  {
    period: "2020.03 — 2022.07",
    school: { zh: "上海电子信息职业技术学院（夜大）", en: "Shanghai Technical College of IT" },
    degree: { zh: "人力资源 · 大专", en: "HR · Associate" },
  },
  {
    period: "2007.11 — 2009.11",
    school: { zh: "部队", en: "Military Service" },
    degree: { zh: "义务兵", en: "Conscript" },
  },
];

const CERTIFICATES = {
  mooc: {
    zh: [
      "哈工大编译原理、南京大学服务计算、北大微观经济学",
      "极客时间：Spring Cloud 微服务、高并发系统设计、分布式事务、消息队列、设计模式、Java 性能调优、RPC、数据库调优、Git、架构实战等 30+ 课程",
    ],
    en: [
      "HIT Compiler Principles, Nanjing U Service Computing, PKU Microeconomics",
      "GeekTime: Spring Cloud, high-concurrency design, distributed tx, MQ, design patterns, Java tuning, RPC, DB tuning, Git, architecture — 30+ courses",
    ],
  },
  military: {
    zh: ["连队集体三等功", "优秀士兵"],
    en: ["Unit Third-Class Merit", "Outstanding Soldier"],
  },
};

const LINKS = [
  { label: "Codewars", url: "https://www.codewars.com/users/g04-ukyo" },
  { label: "TaskSaas", url: "https://gitee.com/createmaker/TaskSaas-v1.1.0" },
  { label: "MATH_BOOK", url: "https://moocstudent.github.io/MATH_BOOK/" },
  { label: "AI_BOOK", url: "https://moocstudent.github.io/AI_BOOK/" },
  { label: "ENGLISH_BOOK", url: "https://moocstudent.github.io/ENGLISH_BOOK/" },
  { label: "GitHub", url: "https://github.com/moocstudent" },
];
