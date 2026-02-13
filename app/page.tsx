export default function Home() {
  const projects = [
    {
      title: "Cloud Portfolio Website",
      status: "Live",
      summary:
        "Personal portfolio built with Next.js and deployed on Vercel. Includes resume, cover letter, and contact links.",
      highlights: ["Next.js", "Vercel", "Responsive UI"],
    },
    {
      title: "Network Lab",
      status: "In progress",
      summary:
        "Hands-on networking practice: DNS troubleshooting, VPN connectivity, VLAN basics, and documentation.",
      highlights: ["DNS", "VPN", "VLAN", "Troubleshooting"],
    },
    {
      title: "AI Study Assistant",
      status: "Active",
      summary:
        "Using AI tools to improve IT support workflows: ticket summaries, checklists, and troubleshooting guides.",
      highlights: ["ITSM", "Prompting", "Runbooks"],
    },
  ];

  const skills = [
    "Windows & basic AD concepts",
    "Networking fundamentals (DNS, DHCP, VLANs)",
    "VPN troubleshooting",
    "Ticket hygiene & documentation",
    "Basic Linux + CLI confidence",
    "Security mindset (least privilege, logs, hygiene)",
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <p className="kicker">IT Support • Cloud • Cybersecurity</p>
          <h1 className="title">Sergey Garbuz</h1>
          <p className="subtitle">
            Junior SOC / Help Desk — Sydney, AU. Building practical labs and clean documentation.
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
            I’m focused on entry-level IT support and junior SOC pathways. I’m building a hands-on lab
            environment and turning real troubleshooting into clear, repeatable runbooks.
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
              <li>Build a small home lab: VLANs, DNS, VPN, and monitoring</li>
              <li>Write short troubleshooting guides (1–2 pages each)</li>
              <li>Improve ticket-style communication (issue → cause → fix → prevention)</li>
            </ul>
          </section>
        </section>

        <section id="projects" className="card" aria-label="Projects">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Projects</h2>
            <p className="muted">Cards are informational only (not clickable).</p>
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