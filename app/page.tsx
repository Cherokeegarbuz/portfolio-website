export default function Page() {
  const focusAreas = [
    "SOC Analysis",
    "Threat Detection",
    "Incident Response",
    "Active Directory",
    "KQL",
    "Windows Security",
    "PowerShell",
    "SIEM Fundamentals",
  ];

  return (
    <div className="page">
      <header className="header container">
        <p className="kicker">SERGII GARBUZ</p>

        <h1 className="title">
          Aspiring SOC Analyst building practical cybersecurity skills
        </h1>

        <p className="subtitle">
          Hands-on home lab work focused on threat detection, Active Directory,
          Windows security logs, incident response thinking, and analyst-style investigation.
        </p>

        <div className="ctaRow">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/resume.pdf" target="_blank" className="btn">Resume</a>
          <a href="/cover-letter.pdf" target="_blank" className="btn">Cover Letter</a>
          <a href="/SOC_KQL_Portfolio.pdf" target="_blank" className="btn">SOC Playbook</a>
        </div>
      </header>

      <main className="main container">
        <section className="grid">
          <div className="card">
            <p className="mutedLabel">Core Focus</p>
            <h2 className="sectionTitle">What I’m building</h2>

            <div className="chips">
              {focusAreas.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>

            <p className="text" style={{ marginTop: 14 }}>
              I am building practical blue-team skills through detection-focused lab work,
              log analysis, Windows administration, and structured SOC scenarios.
            </p>
          </div>

          <div className="card">
            <p className="mutedLabel">Current Goal</p>
            <h2 className="sectionTitle">Junior SOC Analyst / IT Support</h2>
            <p className="text">
              My goal is to transition into an entry-level SOC analyst or IT support role
              where I can keep learning, contribute to real environments, and grow strong
              investigation and response skills.
            </p>

            <div className="ctaRow">
              <a
                href="https://www.linkedin.com/in/sergii-garbuz/"
                target="_blank"
                className="btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="card">
          <p className="mutedLabel">Featured Project</p>
          <div className="sectionHeader">
            <h2 className="sectionTitle">SOC Detection Engineering Lab</h2>
            <span className="badge">Featured</span>
          </div>

          <p className="text">
            Built and tested SOC detection ideas using KQL-style logic and hands-on analyst workflows.
            Practised identifying encoded PowerShell, suspicious parent-child process chains,
            privilege escalation activity, and response decision-making.
          </p>

          <div className="chips">
            <span className="chip">KQL</span>
            <span className="chip">Threat Detection</span>
            <span className="chip">Incident Response</span>
            <span className="chip">Windows Logs</span>
            <span className="chip">PowerShell</span>
          </div>

          <div className="ctaRow">
            <a href="/SOC_KQL_Portfolio.pdf" target="_blank" className="btn primary">
              View SOC Playbook
            </a>
          </div>
        </section>

        <section className="card">
          <p className="mutedLabel">Projects</p>
          <h2 className="sectionTitle">More Lab Work</h2>

          <div className="projects">
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Active Directory Home Lab</h3>
                <span className="badge">AD</span>
              </div>

              <p className="text">
                Built a Windows Server and client lab to practise domain administration,
                user and group management, permissions troubleshooting, and security investigation workflows.
              </p>

              <div className="chips">
                <span className="chip">Active Directory</span>
                <span className="chip">Windows Server</span>
                <span className="chip">Event Viewer</span>
                <span className="chip">GPO</span>
              </div>
            </div>

            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Cybersecurity Portfolio Website</h3>
                <span className="badge">Web</span>
              </div>

              <p className="text">
                Built and updated a portfolio website to present lab work, technical growth,
                and cybersecurity-focused projects in a clear and professional way.
              </p>

              <div className="chips">
                <span className="chip">Next.js</span>
                <span className="chip">GitHub</span>
                <span className="chip">Vercel</span>
                <span className="chip">Web Design</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <p className="mutedLabel">Documents</p>
          <h2 className="sectionTitle">Quick Access</h2>

          <div className="downloadRow">
            <a href="/resume.pdf" target="_blank" className="btn primary">Resume</a>
            <a href="/cover-letter.pdf" target="_blank" className="btn">Cover Letter</a>
            <a href="/SOC_KQL_Portfolio.pdf" target="_blank" className="btn">SOC Playbook</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerInner container">
          <span className="muted">© Sergii Garbuz</span>
          <a
            href="https://www.linkedin.com/in/sergii-garbuz/"
            target="_blank"
            className="link"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
