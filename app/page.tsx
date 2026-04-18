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
          Hands-on SOC lab experience detecting PowerShell abuse, analysing Windows logs,
          and responding to simulated security incidents using Active Directory and KQL.
        </p>
        
        

        <div className="ctaRow">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn">
            Resume
          </a>
          <a href="/cover-letter.pdf" target="_blank" rel="noreferrer" className="btn">
            Cover Letter
          </a>
          <a href="/SOC_KQL_Portfolio.pdf" target="_blank" rel="noreferrer" className="btn">
            SOC Playbook
          </a>
        </div>
      </header>

      <main className="main container">
        <section className="grid">
          <div className="card">
            <p className="mutedLabel">Core Focus</p>
            <h2 className="sectionTitle">What I’m building</h2>

            <div className="chips">
              {focusAreas.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <p className="text" style={{ marginTop: 16 }}>
              I am building practical blue-team skills through detection-focused
              lab work, log analysis, Windows administration, and structured SOC
              scenarios designed to strengthen investigation and response thinking.
            </p>
          </div>

          <div className="card">
            <p className="mutedLabel">Current Goal</p>
            <h2 className="sectionTitle">Junior SOC Analyst / IT Support</h2>
            <p className="text">
              My goal is to transition into an entry-level SOC analyst or IT
              support role where I can keep learning, contribute to real
              environments, and continue developing strong investigation,
              troubleshooting, and incident response skills.
            </p>

            <div className="ctaRow">
              <a
                href="https://www.linkedin.com/in/sergii-garbuz/"
                target="_blank"
                rel="noreferrer"
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
            Designed and tested SOC-style detections using KQL and real Windows
            log analysis. Simulated attacker behaviour including encoded
            PowerShell execution, suspicious parent-child process chains, and
            privilege escalation scenarios.
          </p>

          <p className="text" style={{ marginTop: 14 }}>
            Investigated activity using Event Viewer and applied incident
            response thinking such as account restriction, session revocation,
            and environment-wide threat hunting.
          </p>

          <ul className="list">
            <li>Detected encoded PowerShell through command-line analysis</li>
            <li>Reviewed Event ID 4688 for suspicious process execution</li>
            <li>Investigated abnormal parent-child process relationships</li>
            <li>Practised KQL-style filtering and detection logic</li>
            <li>Built analyst-style response decision-making workflows</li>
          </ul>

          <div className="chips">
            <span className="chip">KQL</span>
            <span className="chip">Threat Detection</span>
            <span className="chip">Incident Response</span>
            <span className="chip">Windows Logs</span>
            <span className="chip">PowerShell</span>
          </div>

          <div className="ctaRow">
            <a
              href="/SOC_KQL_Portfolio.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
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
                Built a Windows Server + client lab environment to simulate real
                enterprise scenarios. Practised user and group management,
                permissions troubleshooting, and Windows administration tasks.
              </p>

              <p className="text" style={{ marginTop: 14 }}>
                Investigated security events, validated group membership
                behaviour, and explored authentication concepts including logon
                events, access issues, and token-related troubleshooting.
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
                <h3 className="projectTitle">Incident Response Scenario Lab</h3>
                <span className="badge">SOC</span>
              </div>

              <p className="text">
                Simulated SOC scenarios involving suspicious sign-ins, possible
                credential compromise, OAuth abuse, and persistence-related
                activity.
              </p>

              <p className="text" style={{ marginTop: 14 }}>
                Analysed attack indicators, reviewed response priorities, and
                practised actions such as revoking sessions, restricting
                accounts, and checking the wider environment for similar
                behaviour.
              </p>

              <div className="chips">
                <span className="chip">Incident Response</span>
                <span className="chip">Threat Hunting</span>
                <span className="chip">Log Analysis</span>
                <span className="chip">Security Operations</span>
              </div>
            </div>

            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Cybersecurity Portfolio Website</h3>
                <span className="badge">Web</span>
              </div>

              <p className="text">
                Built and refined a portfolio website to present lab work,
                technical growth, and cybersecurity-focused projects in a clear,
                modern, and professional format.
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
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn primary">
              Resume
            </a>
            <a href="/cover-letter.pdf" target="_blank" rel="noreferrer" className="btn">
              Cover Letter
            </a>
            <a href="/SOC_KQL_Portfolio.pdf" target="_blank" rel="noreferrer" className="btn">
              SOC Playbook
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerInner container">
          <span className="muted">© Sergii Garbuz</span>
          <a
            href="https://www.linkedin.com/in/sergii-garbuz/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
