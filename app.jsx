/* =========================================================
   App — Router · Theme · Language · Nav
   ========================================================= */

const THEME_KEY = "resume_theme";

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [hash, (h) => { window.location.hash = h; window.scrollTo({ top: 0 }); }];
}

function useTheme() {
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem(THEME_KEY) || "light"; } catch (e) { return "light"; }
  });
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "light" ? "dark" : "light"))];
}

const NAV_ITEMS = [
  { id: "home", hash: "#/", label: "nav_home" },
  { id: "experience", hash: "#/experience", label: "nav_experience" },
  { id: "projects", hash: "#/projects", label: "nav_projects" },
  { id: "skills", hash: "#/skills", label: "nav_skills" },
  { id: "about", hash: "#/about", label: "nav_about" },
];

const Nav = ({ theme, toggleTheme, lang, toggleLang, nav, route }) => {
  const t = useT();

  return (
    <header className="nav">
      <div className="nav-brand" onClick={() => nav("#/")}>
        <span className="mark">ZQ</span>
        <span>{t("brand_word")}</span>
      </div>
      <nav className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} className={route === item.id ? "active" : ""} onClick={() => nav(item.hash)}>
            {t(item.label)}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <button className="lang-btn" onClick={toggleLang} title={t("lang_title")}>
          {lang === "zh" ? "EN" : "中"}
        </button>
        <button className="icon-btn" onClick={toggleTheme} title={t("theme_title")}>
          {theme === "light" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          )}
        </button>
      </div>
    </header>
  );
};

const Footer = () => {
  const t = useT();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{pick(useLang(), PROFILE.name)} · {t("footer_note")}</span>
        <span>2026</span>
      </div>
    </footer>
  );
};

const App = () => {
  const [hash, nav] = useHashRoute();
  const [lang, , toggleLang] = useLangState();
  const [theme, toggleTheme] = useTheme();

  let route = "home";
  if (hash.startsWith("#/experience")) route = "experience";
  else if (hash.startsWith("#/projects")) route = "projects";
  else if (hash.startsWith("#/skills")) route = "skills";
  else if (hash.startsWith("#/about")) route = "about";

  const screenLabel = (() => {
    const item = NAV_ITEMS.find((n) => n.id === route);
    return item ? t_route(item.label) : "Overview";
  })();

  function t_route(key) {
    const e = UI[key];
    if (!e) return key;
    return e[lang] || e.zh;
  }

  return (
    <LangContext.Provider value={lang}>
      <div data-screen-label={screenLabel}>
        <Nav theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} nav={nav} route={route} />
        <div className="running-label">{screenLabel} · {pick(lang, PROFILE.name)} · 2026</div>

        {route === "home" && <HomePage nav={nav} />}
        {route === "experience" && <ExperiencePage />}
        {route === "projects" && <ProjectsPage />}
        {route === "skills" && <SkillsPage />}
        {route === "about" && <AboutPage nav={nav} />}

        <Footer />
      </div>
    </LangContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
