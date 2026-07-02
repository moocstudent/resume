/* =========================================================
   Pages — Home / Experience / Projects / Skills / About
   ========================================================= */

const Ticker = () => {
  const items = [...PROFILE.keywords, ...PROFILE.keywords];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((k, i) => (
          <span key={i} className="ticker-item">
            <span className="pip" />
            <span className="code">{k}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const SectHead = ({ num, title, aside }) => (
  <div className="sect-head">
    <div className="num">{num}</div>
    <div className="title"><span className="cn">{title}</span></div>
    {aside && <div className="aside">{aside}</div>}
  </div>
);

const HomePage = ({ nav }) => {
  const t = useT();
  const lang = useLang();
  const subst = { Y: STATS.years, P: STATS.projects, T: STATS.team };

  return (
    <div className="page">
      <section className="hero container">
        <div className="hero-eyebrow">
          <span className="swatch" />
          <span>{t("hero_badge")}</span>
          <span style={{ marginLeft: "auto", opacity: 0.7 }}>{pick(lang, PROFILE.roles)}</span>
        </div>
        <h1 className="hero-title">
          <span className="cn">{t("hero_l1")}</span><br />
          <span className="cn">{t("hero_l2a")}</span> <span className="accent">{t("hero_l2b")}</span>
        </h1>
        <p className="hero-sub dropcap">{fmt(t("hero_sub"), subst)}</p>
        <div className="cta-row">
          <button className="btn btn-accent" onClick={() => nav("#/experience")}>{t("cta_experience")}</button>
          <button className="btn" onClick={() => nav("#/projects")}>{t("cta_projects")}</button>
          <a className="btn" href={`mailto:${PROFILE.email}`}>{t("cta_contact")}</a>
        </div>
        <div className="hero-meta">
          <div className="cell"><div className="v">{STATS.years}+</div><div className="l">{t("meta_years")}</div></div>
          <div className="cell"><div className="v">{STATS.projects}</div><div className="l">{t("meta_projects")}</div></div>
          <div className="cell"><div className="v">{STATS.team}</div><div className="l">{t("meta_team")}</div></div>
          <div className="cell"><div className="v">{STATS.certs}+</div><div className="l">{t("meta_certs")}</div></div>
        </div>
      </section>

      <Ticker />

      <section className="section">
        <div className="container">
          <SectHead num="§ 01" title={t("sec_experience")} aside={WORK_EXPERIENCE.length + " roles"} />
          <div className="timeline compact">
            {WORK_EXPERIENCE.map((w) => (
              <div key={w.id} className="tl-item">
                <div className="tl-period">{w.period}</div>
                <div className="tl-body">
                  <div className="tl-title">{pick(lang, w.company)}</div>
                  <div className="tl-sub">{pick(lang, w.title)}</div>
                  <ul className="tl-list">
                    {pick(lang, w.highlights).slice(0, 3).map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <button className="btn btn-primary" onClick={() => nav("#/experience")}>{t("cta_experience")}</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectHead num="§ 02" title={t("sec_personal")} aside={PERSONAL_PROJECTS.length + " repos"} />
          <div className="proj-grid">
            {PERSONAL_PROJECTS.map((p) => (
              <div key={p.id} className="proj-card accent">
                <div className="proj-top">
                  <span className="proj-stack">{p.stack}</span>
                </div>
                <div className="proj-title">{pick(lang, p.title)}</div>
                <p className="proj-desc">{pick(lang, p.desc)}</p>
                {p.link && <a className="proj-link" href={p.link} target="_blank" rel="noopener noreferrer">{t("open_source")} →</a>}
                {p.links && (
                  <div className="proj-links">
                    {p.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-bar">
        <div className="container contact-grid">
          <div><span className="tiny">{t("contact_email")}</span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
          <div><span className="tiny">{t("contact_phone")}</span><a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></div>
          <div><span className="tiny">{t("contact_codewars")}</span><a href={PROFILE.codewars} target="_blank" rel="noopener noreferrer">g04-ukyo</a></div>
        </div>
      </section>
    </div>
  );
};

const ExperiencePage = () => {
  const t = useT();
  const lang = useLang();

  return (
    <div className="page">
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <SectHead num="§ 01" title={t("sec_experience")} aside={WORK_EXPERIENCE.length + " companies"} />
          <div className="timeline">
            {WORK_EXPERIENCE.map((w) => (
              <div key={w.id} className="tl-item">
                <div className="tl-period">{w.period}</div>
                <div className="tl-body">
                  <div className="tl-title">{pick(lang, w.company)}</div>
                  <div className="tl-sub">{pick(lang, w.title)}</div>
                  <ul className="tl-list">
                    {pick(lang, w.highlights).map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectsPage = () => {
  const t = useT();
  const lang = useLang();
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="page">
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <SectHead num="§ 02" title={t("sec_projects")} aside={PROJECTS.length + " items"} />
          {featured.length > 0 && (
            <>
              <div className="proj-grid featured-grid">
                {featured.map((p) => (
                  <div key={p.id} className="proj-card accent">
                    <div className="proj-top">
                      <span className="proj-period">{p.period}</span>
                      <span className="proj-stack">{p.stack}</span>
                    </div>
                    <div className="proj-title">{pick(lang, p.title)}</div>
                    <div className="proj-role">{pick(lang, p.role)}</div>
                    <ul className="proj-scope">
                      {pick(lang, p.scope).map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="divider-label">{lang === "zh" ? "更多项目" : "More projects"}</div>
            </>
          )}
          <div className="proj-list">
            {rest.map((p) => (
              <div key={p.id} className="proj-row">
                <div className="proj-row-left">
                  <div className="proj-period">{p.period}</div>
                  <div className="proj-title">{pick(lang, p.title)}</div>
                  <div className="proj-stack">{p.stack}</div>
                </div>
                <ul className="proj-scope">
                  {pick(lang, p.scope).map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectHead num="§ 02b" title={t("sec_personal")} aside={PERSONAL_PROJECTS.length + " side projects"} />
          <div className="proj-grid">
            {PERSONAL_PROJECTS.map((p) => (
              <div key={p.id} className="proj-card">
                <div className="proj-top"><span className="proj-stack">{p.stack}</span></div>
                <div className="proj-title">{pick(lang, p.title)}</div>
                <p className="proj-desc">{pick(lang, p.desc)}</p>
                {p.link && <a className="proj-link" href={p.link} target="_blank" rel="noopener noreferrer">{t("open_source")} →</a>}
                {p.links && (
                  <div className="proj-links">
                    {p.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillsPage = () => {
  const t = useT();
  const lang = useLang();

  return (
    <div className="page">
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <SectHead num="§ 03" title={t("sec_skills")} aside={SKILL_GROUPS.length + " groups"} />
          <div className="skill-grid">
            {SKILL_GROUPS.map((g) => (
              <div key={g.id} className="skill-card">
                <div className="skill-title">{pick(lang, g.title)}</div>
                <div className="skill-tags">
                  {pick(lang, g.items)[0].split(" · ").map((tag, i) => (
                    <span key={i} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectHead num="§ 04" title={t("sec_certs")} />
          <div className="cert-grid">
            <div className="cert-block">
              <div className="cert-label">MOOC / GeekTime</div>
              <ul>{pick(lang, CERTIFICATES.mooc).map((c, i) => <li key={i}>{c}</li>)}</ul>
            </div>
            <div className="cert-block">
              <div className="cert-label">{lang === "zh" ? "军旅荣誉" : "Military Honors"}</div>
              <ul>{pick(lang, CERTIFICATES.military).map((c, i) => <li key={i}>{c}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ nav }) => {
  const t = useT();
  const lang = useLang();

  return (
    <div className="page">
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <SectHead num="§ 05" title={t("sec_about")} />
          <div className="about-prose">
            <p className="dropcap">{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
            <p>{t("about_p3")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectHead num="§ 06" title={t("sec_education")} aside={EDUCATION.length + " entries"} />
          <div className="edu-grid">
            {EDUCATION.map((e, i) => (
              <div key={i} className="edu-card">
                <div className="edu-period">{e.period}</div>
                <div className="edu-school">{pick(lang, e.school)}</div>
                <div className="edu-degree">{pick(lang, e.degree)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectHead num="§ 07" title={t("sec_links")} />
          <div className="link-grid">
            {LINKS.map((l) => (
              <a key={l.url} className="link-card" href={l.url} target="_blank" rel="noopener noreferrer">
                <span className="link-label">{l.label}</span>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-bar">
        <div className="container contact-grid">
          <div><span className="tiny">{t("contact_email")}</span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
          <div><span className="tiny">{t("contact_phone")}</span><a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></div>
          <div><span className="tiny">{t("contact_codewars")}</span><a href={PROFILE.codewars} target="_blank" rel="noopener noreferrer">g04-ukyo</a></div>
        </div>
      </section>
    </div>
  );
};
