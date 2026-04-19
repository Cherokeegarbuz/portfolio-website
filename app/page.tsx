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
          <a
            href="/Real_Incident_Investigation_Sergii_Garbuz.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Incident Investigation
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
            <h2 className="sectionTitle">Real Incident Investigation</h2>
            <span className="badge">Featured</span>
          </div>

          <p className="text">
            Investigated a simulated multi-stage attack involving suspicious PowerShell
            execution, likely token theft, lateral movement, and data exfiltration risk.
            Documented the timeline, validated evidence, and outlined containment and
            escalation decisions using a SOC-style workflow.
          </p>

          <ul className="list">
            <li>Built a clear attack timeline from initial execution to exfiltration risk</li>
            <li>Reviewed encoded PowerShell, parent-child process chains, and Windows evidence</li>
            <li>Applied incident response thinking across containment, escalation, and documentation</li>
            <li>Presented the investigation as a polished portfolio-ready report</li>
          </ul>

          <div className="ctaRow">
            <a
              href="/Real_Incident_Investigation_Sergii_Garbuz.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              View Incident Report
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="card">
          <p className="mutedLabel">Projects</p>
          <h2 className="sectionTitle">More Lab Work</h2>

          <div className="projects">

            {/* DETECTION LAB */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">SOC Detection Engineering Lab</h3>
                <span className="badge">KQL</span>
              </div>

              <p className="text">
                Designed and tested SOC-style detections using KQL and Windows log analysis.
                Focused on encoded PowerShell, suspicious process relationships, and early
                attacker behaviour that can be surfaced through good detection logic.
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

            {/* AD LAB */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Active Directory Home Lab</h3>
                <span className="badge">AD</span>
              </div>

              <p className="text">
                Built a Windows Server and client lab to simulate enterprise administration.
                Practised user and group management, permissions troubleshooting, log review,
                and security-focused workflow across a small domain environment.
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
                Simulated realistic SOC cases including credential compromise, suspicious
                logins, OAuth abuse, and attacker persistence. Focused on triage decisions,
                escalation judgement, and environment-wide validation.
              </p>

              <div className="chips">
                <span className="chip">Incident Response</span>
                <span className="chip">Threat Hunting</span>
              </div>
            </div>

            {/* RANSOMWARE REPORT */}
            <div className="projectCard">
              <div className="projectTop">
                <h3 className="projectTitle">Ransomware Pre-Stage Report</h3>
                <span className="badge">IR</span>
              </div>

              <p className="text">
                Documented a full ransomware pre-stage attack chain including detection,
                containment priorities, lateral movement considerations, and prevention
                strategies relevant to junior SOC workflows.
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
            <a href="/Real_Incident_Investigation_Sergii_Garbuz.pdf" target="_blank" rel="noreferrer" className="btn">
              Incident Investigation
            </a>
            <a href="/SOC_Incident_Report_Ransomware_PreStage.pdf" target="_blank" rel="noreferrer" className="btn">
              Ransomware Report
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
