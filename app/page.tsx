export default function Home() {
  const projects = [
    {
      title: "SOC Analyst Training Lab",
      status: "Active",
      summary:
        "Simulated realistic security incidents involving credential theft, Pass-the-Hash, phishing, DNS tunneling, and persistence. Focused on investigation flow, containment decisions, and structured incident reporting.",
      highlights: [
        "Threat Hunting",
        "Incident Response",
        "SIEM Mindset",
      ],
    },
    {
      title: "Active Directory & Network Lab",
      status: "In progress",
      summary:
        "Building a Windows lab environment to practise Active Directory fundamentals, authentication flows, DNS, VPN troubleshooting, and structured support workflows.",
      highlights: ["Active Directory", "DNS", "VPN", "Windows"],
    },
    {
      title: "Cloud Portfolio Website",
      status: "Live",
      summary:
        "Personal portfolio built with Next.js and deployed on Vercel to showcase labs, projects, and downloadable resume and cover letter.",
      highlights: ["Next.js", "Vercel", "Frontend"],
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
            <p className="muted">Focused on practical, real-world scenarios.</p>
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
