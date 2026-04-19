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
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn">Resume</a>
          <a href="/cover-letter.pdf" target="_blank" rel="noreferrer" className="btn">Cover Letter</a>
          <a href="/SOC_KQL_Playbook_v2.pdf" target="_blank" rel="noreferrer" className="btn">
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
                <span key={item} className="chip">{item}</span>
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
              My goal is to transition into an entry-level SOC analyst or IT support role
              where I can keep learning, contribute to real environments, and continue
              developing strong investigation and response skills.
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

        {/* FEATURED */}
        <section id="projects" className="card">
          <p className="mutedLabel">Featured Project</p>

          <div className="sectionHeader">
            <h2 className="sectionTitle">SOC Detection Engineering Lab</h2>
            <span className="badge">Featured</span>
          </div>

          <p className="text">
            Designed and tested SOC-style detections using KQL and real Windows log analysis.
            Simulated attacker behaviour including encoded PowerShell execution, suspicious
            parent-child process chains, and privilege escalation scenarios.
          </p>

          <ul className="list">
            <li>Detected encoded PowerShell through command-line analysis</li>
            <li>Analysed Event ID 4688 for suspicious process execution</li>
            <li>Investigated abnormal parent-child relationships</li>
            <li>Practised KQL detection logic</li>
          </ul>

          <div className="ctaRow">
            <a
              href="/SOC_KQL_Playbook_v2.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              View SOC Playbook
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="card">
          <p className="mutedLabel">Projects</p>
          <h2 className="sectionTitle">More Lab Work</h2>

          <div className="projects">

            {/* AD LAB */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Active Directory Home Lab</h3>
                <span className="badge">AD</span>
              </div>

              <p className="text">
                Built a Windows Server + client lab to simulate enterprise environments.
                Practised user management, permissions troubleshooting, and log analysis.
              </p>

              <div className="chips">
                <span className="chip">Active Directory</span>
                <span className="chip">Windows Server</span>
                <span className="chip">Event Viewer</span>
              </div>
            </div>

            {/* INCIDENT LAB */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Incident Response Scenario Lab</h3>
                <span className="badge">SOC</span>
              </div>

              <p className="text">
                Simulated real SOC scenarios including credential compromise,
                OAuth abuse, and suspicious login activity.
              </p>

              <div className="chips">
                <span className="chip">Incident Response</span>
                <span className="chip">Threat Hunting</span>
              </div>
            </div>

            {/* PLAYBOOK */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">SOC KQL Playbook</h3>
                <span className="badge">KQL</span>
              </div>

              <p className="text">
                Developed a KQL detection playbook covering full attack chains
                including PowerShell abuse, lateral movement, and ransomware pre-stage activity.
              </p>

              <div className="ctaRow">
                <a
                  href="/SOC_KQL_Playbook_v2.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Open Playbook
                </a>
              </div>
            </div>

            {/* INCIDENT REPORT */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Ransomware Incident Report</h3>
                <span className="badge">IR</span>
              </div>

              <p className="text">
                Documented a full multi-stage ransomware pre-stage attack including
                detection, containment, lateral movement, and prevention strategies.
              </p>

              <div className="ctaRow">
                <a
                  href="/SOC_Incident_Report_Ransomware_PreStage.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  View Report
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="card">
          <p className="mutedLabel">Documents</p>
          <h2 className="sectionTitle">Quick Access</h2>

          <div className="downloadRow">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn primary">Resume</a>
            <a href="/cover-letter.pdf" target="_blank" rel="noreferrer" className="btn">Cover Letter</a>
            <a href="/SOC_KQL_Playbook_v2.pdf" target="_blank" rel="noreferrer" className="btn">SOC Playbook</a>
            <a href="/SOC_Incident_Report_Ransomware_PreStage.pdf" target="_blank" rel="noreferrer" className="btn">Incident Report</a>
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
