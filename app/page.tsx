export default function Home() {
  const projects = [
    {
      title: "SOC Analyst Training Lab",
      status: "Active",
      summary:
        "Simulated real-world security incidents including credential theft, Pass-the-Hash, DNS tunneling, phishing, and persistence. Focused on detection, containment, and root cause analysis.",
      highlights: ["SIEM Thinking", "Incident Response", "Threat Hunting"],
    },
    {
      title: "Active Directory & Network Lab",
      status: "In progress",
      summary:
        "Building a home lab with Windows Server and clients to practise AD basics, authentication flows, DNS, VPN, and troubleshooting real-world scenarios.",
      highlights: ["Active Directory", "DNS", "VPN", "Troubleshooting"],
    },
    {
      title: "Cloud Portfolio Website",
      status: "Live",
      summary:
        "Personal website built with Next.js and deployed on Vercel. Showcases projects, labs, and downloadable resume.",
      highlights: ["Next.js", "Vercel", "Frontend"],
    },
  ];

  const skills = [
    "Windows & Active Directory fundamentals",
    "Authentication basics (NTLM vs Kerberos)",
    "Networking (DNS, DHCP, VLANs, VPN)",
    "Incident triage & escalation thinking",
    "Log analysis mindset (SIEM concepts)",
    "Linux & CLI basics",
    "Clear documentation & ticket workflows",
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <p className="kicker">SOC Analyst • IT Support • Cybersecurity</p>
          <h1 className="title">Sergey Garbuz</h1>
          <p className="subtitle">
            Junior SOC / Help Desk — Sydney, AU. Building hands-on labs and practising real-world security scenarios.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href="#contact">Contact</a>
            <a className="btn" href="#projects">View Projects</a>
          </div>
        </div>
      </header>

      <main className="container main">
        <section className="card" aria-label="About">
          <h2 className="sectionTitle">About</h2>
          <p className="text">
            I’m working towards a Junior SOC Analyst / IT Support role, focusing on practical labs and real-world troubleshooting.
            I simulate security incidents, analyse behaviour (not just alerts), and document findings in a structured, repeatable way.
          </p>
        </section>

        <section className="grid">
          <section className="card" aria-label="Skills">
            <h2 className="sectionTitle">Core Skills</h2>
            <ul className="list">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="card" aria-label="What I'm working on">
            <h2 className="sectionTitle">Current Focus</h2>
            <ul className="list">
              <li>Simulating SOC scenarios (credential theft, lateral movement, exfiltration)</li>
              <li>Building AD + Windows lab environment</li>
              <li>Writing structured incident reports (detection → investigation → containment)</li>
            </ul>
          </section>
        </section>

        <section id="projects" className="card" aria-label="Projects">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Projects & Labs</h2>
            <p className="muted">Focused on practical, real-world scenarios.</p>
          </div>

          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="projectCard">
                <div className="projectTop">
                  <h3 className="projectTitle">{p.title}</h3>
                  <span className="badge">{p.status}</span>
                </div>

                <p className="text">{p.summary}</p>

                <div className="chips">
                  {p.highlights.map((h) => (
                    <span className="chip" key={h}>{h}</span>
                  ))}
                </div>
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

              <p className="mutedLabel" style={{ marginTop: 14 }}>LinkedIn</p>
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
              <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
              <a className="btn" href="/cover-letter.pdf" target="_blank" rel="noreferrer">
                Cover Letter (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">Built with Next.js • Deployed on Vercel</span>
          <span className="muted">© {new Date().getFullYear()} Sergey Garbuz</span>
        </div>
      </footer>
    </div>
  );
}
