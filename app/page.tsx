export default function Home() {
  const projects = [
    {
      title: "SOC Lab: Multi-Stage PowerShell Attack Detection & Response",
      status: "Featured",
      summary:
        "Built and investigated a hands-on Windows SOC lab simulating a multi-stage compromise involving encoded PowerShell execution, suspicious process chains, reconnaissance activity, and registry-based persistence.",
      highlights: [
        "Event ID 4688",
        "PowerShell Logging",
        "Incident Response",
        "MITRE ATT&CK",
      ],
      details: [
        "Detected obfuscated PowerShell execution using -enc, -nop, -w hidden, and execution policy bypass flags",
        "Investigated parent-child process chains including PowerShell spawning cmd.exe, ipconfig.exe, and reg.exe",
        "Analysed post-exploitation reconnaissance behaviour such as whoami, hostname, ipconfig, and net user",
        "Identified persistence via HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run and documented response actions",
        "Reconstructed attack timeline and assessed severity based on execution, reconnaissance, and persistence",
      ],
    },
    {
      title: "SOC Analyst Training Lab",
      status: "Active",
      summary:
        "Simulated realistic security incidents involving credential theft, Pass-the-Hash, phishing, DNS tunneling, and persistence. Focused on detection logic, investigation flow, containment decisions, and structured incident reporting.",
      highlights: [
        "Threat Hunting",
        "Incident Response",
        "SIEM Mindset",
      ],
      details: [
        "Practised multi-stage detection and triage thinking across endpoint and authentication activity",
        "Focused on scoping, escalation, and containment decisions rather than relying on a single alert",
        "Mapped suspicious behaviour to attacker objectives including execution, discovery, credential abuse, and persistence",
      ],
    },
    {
      title: "Active Directory & Network Lab",
      status: "In Progress",
      summary:
        "Building a Windows domain lab to practise Active Directory fundamentals, authentication flows, DNS troubleshooting, permissions, and structured IT support workflows.",
      highlights: ["Active Directory", "DNS", "VPN", "Windows"],
      details: [
        "Working with domain join, users, groups, permissions, and authentication troubleshooting",
        "Exploring Kerberos, NTLM, Group Policy, token refresh, and access control behaviour",
        "Using the lab to strengthen both junior SOC analysis and real-world IT support troubleshooting",
      ],
    },
    {
      title: "Cloud Portfolio Website",
      status: "Live",
      summary:
        "Personal portfolio built with Next.js and deployed on Vercel to showcase hands-on labs, projects, case studies, and downloadable resume and cover letter.",
      highlights: ["Next.js", "Vercel", "Frontend"],
      details: [
        "Designed to present practical cybersecurity work clearly and professionally",
        "Continuously updated with new labs, projects, and portfolio-ready documentation",
        "Used as a central application portfolio for recruiters, hiring managers, and networking",
      ],
    },
  ];

  const skills = [
    "Windows & Active Directory fundamentals",
    "Authentication (NTLM, Kerberos basics)",
    "Networking (DNS, DHCP, VLANs, VPN)",
    "Incident triage & escalation thinking",
    "Log analysis mindset (SIEM concepts)",
    "Linux & CLI basics",
    "Clear documentation & ticket workflows",
  ];

  const caseStudies = [
    {
      title: "Credential Theft & Lateral Movement",
      summary:
        "Investigated suspicious NTLM authentication, correlated PowerShell activity, identified LSASS access, and scoped likely credential theft behaviour.",
      bullets: [
        "Correlated weak signals instead of waiting for a single alert",
        "Investigated authentication anomalies and endpoint behaviour",
        "Practised containment, scoping, and escalation decisions",
      ],
    },
    {
      title: "DNS Tunneling & Data Exfiltration",
      summary:
        "Analysed unusual DNS query patterns, identified encoded subdomains, linked activity to PowerShell launched from Word, and worked through exfiltration containment.",
      bullets: [
        "Detected subtle DNS anomalies and NXDOMAIN spikes",
        "Traced behaviour back to likely phishing execution chain",
        "Focused on containment, persistence checks, and historical hunting",
      ],
    },
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <p className="kicker">SOC ANALYST • IT SUPPORT • CYBERSECURITY</p>
          <h1 className="title">Sergey Garbuz</h1>
          <p className="subtitle">
            Junior SOC Analyst / IT Support — Sydney, AU. Building hands-on labs
            and practising real-world security scenarios.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href="#contact">
              Contact
            </a>
            <a className="btn" href="#projects">
              View Projects
            </a>
          </div>
        </div>
      </header>

      <main className="container main">
        <section className="card" aria-label="About">
          <h2 className="sectionTitle">About</h2>
          <p className="text">
            I’m working towards a Junior SOC Analyst / IT Support role, focusing
            on practical labs and real-world troubleshooting.
          </p>
          <p className="text" style={{ marginTop: 12 }}>
            I simulate security incidents such as credential theft, lateral
            movement, phishing, and data exfiltration, analyse behaviour rather
            than relying only on alerts, and document findings in a structured,
            repeatable way.
          </p>
        </section>

        <section className="grid">
          <section className="card" aria-label="Skills">
            <h2 className="sectionTitle">Core Skills</h2>
            <ul className="list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="card" aria-label="Current Focus">
            <h2 className="sectionTitle">Current Focus</h2>
            <ul className="list">
              <li>
                Simulating SOC scenarios (Pass-the-Hash, credential dumping, DNS
                tunneling, phishing)
              </li>
              <li>Building AD + Windows lab environment</li>
              <li>
                Writing structured incident reports (detection → investigation →
                containment)
              </li>
            </ul>
          </section>
        </section>

        <section id="projects" className="card" aria-label="Projects">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Projects & Labs</h2>
            <p className="muted">
              Focused on practical, hands-on scenarios and investigation-driven learning.
            </p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article key={project.title} className="projectCard">
                <div className="projectTop">
                  <h3 className="projectTitle">{project.title}</h3>
                  <span className="badge">{project.status}</span>
                </div>

                <p className="text">{project.summary}</p>

                <div className="chips">
                  {project.highlights.map((highlight) => (
                    <span className="chip" key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>

                <ul className="list" style={{ marginTop: 14 }}>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card" aria-label="Case Studies">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Case Studies</h2>
            <p className="muted">Examples of the scenarios I’ve worked through.</p>
          </div>

          <div className="projects">
            {caseStudies.map((study) => (
              <article key={study.title} className="projectCard">
                <div className="projectTop">
                  <h3 className="projectTitle">{study.title}</h3>
                  <span className="badge">Scenario</span>
                </div>

                <p className="text">{study.summary}</p>

                <ul className="list" style={{ marginTop: 12 }}>
                  {study.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="card" aria-label="Contact">
          <h2 className="sectionTitle">Contact</h2>

          <div className="contactGrid">
            <div>
              <p className="mutedLabel">Email</p>
              <a className="link" href="mailto:cherokeegarbuz@gmail.com">
                cherokeegarbuz@gmail.com
              </a>

              <p className="mutedLabel" style={{ marginTop: 14 }}>
                LinkedIn
              </p>
              <a
                className="link"
                href="https://au.linkedin.com/in/sergii-garbuz"
                target="_blank"
                rel="noreferrer"
              >
                au.linkedin.com/in/sergii-garbuz
              </a>
            </div>

            <div className="downloadRow">
              <a
                className="btn"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume (PDF)
              </a>
              <a
                className="btn"
                href="/cover-letter.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Cover Letter (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">Built with Next.js • Deployed on Vercel</span>
          <span className="muted">
            © {new Date().getFullYear()} Sergey Garbuz
          </span>
        </div>
      </footer>
    </div>
  );
}
