export default function Page() {
  return (
    <div className="page">
      <header className="header container">
        <p className="kicker">Sergii Garbuz</p>

        <h1 className="title">
          Aspiring SOC Analyst building practical cybersecurity skills
        </h1>

        <p className="subtitle">
          I am developing hands-on experience through home lab work focused on
          threat detection, Active Directory, Windows security logs, incident
          response thinking, and real analyst-style investigation.
        </p>

        <div className="ctaRow">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/resume.pdf" target="_blank" className="btn">Resume</a>
          <a href="/cover-letter.pdf" target="_blank" className="btn">Cover Letter</a>
        </div>
      </header>

      <main className="main container">

        {/* Core Focus */}
        <section className="card">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Core Focus Areas</h2>
          </div>

          <div className="chips">
            {[
              "SOC Analysis",
              "Threat Detection",
              "Incident Response",
              "Active Directory",
              "KQL",
              "Windows Security",
              "PowerShell",
              "SIEM Fundamentals"
            ].map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>

          <p className="text" style={{ marginTop: "12px" }}>
            This portfolio highlights practical work in security operations,
            home lab development, detection thinking, and technical growth
            toward a junior SOC analyst role.
          </p>
        </section>

        {/* About */}
        <section className="card">
          <h2 className="sectionTitle">
            Practical learning, home labs, and real investigation mindset
          </h2>

          <p className="text">
            I am focused on building job-ready cybersecurity skills through
            structured hands-on practice. My current work includes Active
            Directory lab exercises, Windows event log investigation,
            PowerShell-related detection scenarios, and SOC-style analyst
            reasoning around phishing, privilege escalation, and incident response.
          </p>

          <p className="text" style={{ marginTop: "10px" }}>
            I enjoy learning by doing, especially when I can simulate real
            attack chains, investigate suspicious activity, and turn that
            process into practical documentation and portfolio projects.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="card">
          <h2 className="sectionTitle">Cybersecurity Projects and Lab Work</h2>

          <p className="text">
            These projects show the practical side of my learning, including lab
            building, detection thinking, analyst workflows, and technical problem solving.
          </p>

          <div className="projects">

            {/* Project 1 */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">SOC Detection Engineering Lab</h3>
                <span className="badge">KQL</span>
              </div>

              <p className="text">
                Built and tested detection ideas using KQL-style logic and hands-on SOC workflows.
                Practised identifying encoded PowerShell, suspicious parent-child process chains,
                privilege escalation activity, and incident response decision-making.
              </p>

              <div className="chips">
                <span className="chip">KQL</span>
                <span className="chip">Threat Detection</span>
                <span className="chip">Incident Response</span>
                <span className="chip">Windows Logs</span>
              </div>

              <div className="ctaRow">
                <a href="/SOC_KQL_Portfolio.pdf" target="_blank" className="btn primary">
                  View Playbook
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Active Directory Home Lab</h3>
                <span className="badge">AD</span>
              </div>

              <p className="text">
                Built a Windows Server and client lab to practise domain administration,
                permissions troubleshooting, group management, and security investigation workflows.
              </p>

              <div className="chips">
                <span className="chip">Active Directory</span>
                <span className="chip">Windows Server</span>
                <span className="chip">Event Viewer</span>
                <span className="chip">GPO</span>
              </div>
            </div>

          </div>
        </section>

        {/* Documents */}
        <section className="card">
          <h2 className="sectionTitle">Portfolio Documents</h2>

          <div className="downloadRow">
            <a href="/resume.pdf" target="_blank" className="btn primary">
              Resume
            </a>
            <a href="/cover-letter.pdf" target="_blank" className="btn">
              Cover Letter
            </a>
            <a href="/SOC_KQL_Portfolio.pdf" target="_blank" className="btn">
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
            className="link"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
