export default function Home() {
  const container: React.CSSProperties = {
    minHeight: "100vh",
    background: "#0b0b0c",
    color: "#f5f5f7",
    padding: "56px 18px",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  };

  const maxWidth: React.CSSProperties = {
    maxWidth: 820,
    margin: "0 auto",
  };

  const h1: React.CSSProperties = {
    fontSize: 44,
    lineHeight: 1.05,
    letterSpacing: -0.6,
    margin: 0,
    fontWeight: 700,
  };

  const subtitle: React.CSSProperties = {
    marginTop: 10,
    fontSize: 18,
    opacity: 0.78,
  };

  const pillRow: React.CSSProperties = {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 18,
  };

  const pillLink = (variant: "primary" | "ghost" = "ghost"): React.CSSProperties => ({
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 14,
    textDecoration: "none",
    border: variant === "primary" ? "1px solid #f5f5f7" : "1px solid rgba(255,255,255,0.14)",
    background: variant === "primary" ? "#f5f5f7" : "transparent",
    color: variant === "primary" ? "#0b0b0c" : "#f5f5f7",
    fontSize: 15,
    fontWeight: 600,
  });

  const sectionTitle: React.CSSProperties = {
    marginTop: 36,
    marginBottom: 12,
    fontSize: 34,
    letterSpacing: -0.4,
    fontWeight: 700,
  };

  const paragraph: React.CSSProperties = {
    fontSize: 16,
    lineHeight: 1.7,
    opacity: 0.9,
    margin: "0 0 10px 0",
  };

  const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
    marginTop: 14,
  };

  const card: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 18,
    padding: 16,
  };

  const cardTitle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 700,
    margin: "0 0 8px 0",
  };

  const cardText: React.CSSProperties = {
    fontSize: 15,
    lineHeight: 1.6,
    opacity: 0.86,
    margin: 0,
  };

  const openLink: React.CSSProperties = {
    display: "inline-block",
    marginTop: 12,
    textDecoration: "none",
    color: "#f5f5f7",
    opacity: 0.9,
    fontWeight: 600,
  };

  const list: React.CSSProperties = {
    marginTop: 8,
    paddingLeft: 18,
    lineHeight: 1.8,
    opacity: 0.9,
  };

  const contactRow: React.CSSProperties = {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 10,
  };

  const hr: React.CSSProperties = {
    marginTop: 28,
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.10)",
  };

  return (
    <main style={container}>
      <div style={maxWidth}>
        <header>
          <h1 style={h1}>Sergey Garbuz</h1>
          <div style={subtitle}>
            Entry-level IT Support • Sydney, NSW • Cloud & Cybersecurity learner
          </div>

          <div style={pillRow}>
            <a style={pillLink("primary")} href="mailto:cherokeegarbuz@gmail.com">
              Email
            </a>

            <a
              style={pillLink()}
              href="https://au.linkedin.com/in/sergii-garbuz"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              style={pillLink()}
              href="https://github.com/Cherokeegarbuz/portfolio-website"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </header>

        <section>
          <h2 style={sectionTitle}>About</h2>
          <p style={paragraph}>
            I’m an entry-level IT Support professional based in Sydney, with a strong foundation
            in networking and cybersecurity. I’ve completed structured training across Network+,
            Security+, incident handling, SOC fundamentals (including MITRE ATT&amp;CK), and
            penetration testing.
          </p>
          <p style={paragraph}>
            I enjoy troubleshooting real-world issues, supporting users clearly and calmly, and
            documenting fixes so problems don’t repeat. My goal is to grow into a well-rounded IT
            and security professional delivering reliable, secure, user-focused support.
          </p>
        </section>

        <section>
          <h2 style={sectionTitle}>Skills</h2>
          <ul style={list}>
            <li>First-level IT support: hardware/software, user access, Windows/macOS basics</li>
            <li>Networking fundamentals: Wi-Fi troubleshooting, DNS, VPN connectivity</li>
            <li>Account &amp; access: password resets, MFA basics, onboarding/offboarding support</li>
            <li>Security fundamentals: incident awareness, safe handling, escalation &amp; documentation</li>
            <li>Cloud workflow: GitHub, Codespaces, Vercel deployments</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitle}>Projects</h2>

          <div style={grid}>
            <div style={card}>
              <div style={cardTitle}>Cloud Portfolio Website</div>
              <p style={cardText}>
                Personal portfolio built with Next.js and deployed on Vercel. Includes contact links,
                and downloadable Resume &amp; Cover Letter PDFs. Demonstrates GitHub workflow and cloud hosting.
              </p>
              <a
                style={openLink}
                href="https://portfolio-website-seven-nu-13.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open →
              </a>
            </div>

            <div style={card}>
              <div style={cardTitle}>Network Lab (in progress)</div>
              <p style={cardText}>
                Hands-on networking and security practice environment. Includes DNS troubleshooting,
                VPN connectivity testing, VLAN concepts, and structured documentation aligned with
                Network+ and Security+ studies.
              </p>
              <a style={openLink} href="#" onClick={(e) => e.preventDefault()}>
                Open →
              </a>
            </div>

            <div style={card}>
              <div style={cardTitle}>AI Study Assistant</div>
              <p style={cardText}>
                AI-powered study and productivity helper used to summarise tickets, generate troubleshooting
                checklists, and support learning for IT support and cybersecurity workflows.
              </p>
              <a style={openLink} href="#" onClick={(e) => e.preventDefault()}>
                Open →
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 style={sectionTitle}>Contact</h2>
          <p style={paragraph}>
            Email:{" "}
            <a style={{ color: "#f5f5f7" }} href="mailto:cherokeegarbuz@gmail.com">
              cherokeegarbuz@gmail.com
            </a>
          </p>
          <p style={paragraph}>
            LinkedIn:{" "}
            <a
              style={{ color: "#f5f5f7" }}
              href="https://au.linkedin.com/in/sergii-garbuz"
              target="_blank"
              rel="noreferrer"
            >
              au.linkedin.com/in/sergii-garbuz
            </a>
          </p>

          <div style={contactRow}>
            <a style={pillLink()} href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
            <a style={pillLink()} href="/cover-letter.pdf" target="_blank" rel="noreferrer">
              Cover Letter (PDF)
            </a>
          </div>
        </section>

        <hr style={hr} />
        <footer style={{ marginTop: 16, opacity: 0.65, fontSize: 13 }}>
          Built with Next.js • Deployed on Vercel • GitHub-based workflow
        </footer>
      </div>
    </main>
  );
}