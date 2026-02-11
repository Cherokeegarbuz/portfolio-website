export default function Home() {
  const email = "cherokeegarbuz@gmail.com";
  const linkedin = "https://au.linkedin.com/in/sergii-garbuz";
  const githubRepo = "https://github.com/Cherokeegarbuz/portfolio-website";

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Sergey Garbuz</h1>
        <p style={styles.subhead}>Entry-level IT Support • Sydney, NSW • Cloud & AI learner</p>

        <div style={styles.buttonRow}>
          <a href={`mailto:${email}`} style={styles.buttonSolid}>
            Email
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" style={styles.buttonOutline}>
            LinkedIn
          </a>
          <a href={githubRepo} target="_blank" rel="noreferrer" style={styles.buttonOutline}>
            GitHub Repo
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" style={styles.buttonOutline}>
            Resume (PDF)
          </a>
          <a href="/cover-letter.pdf" target="_blank" rel="noreferrer" style={styles.buttonOutline}>
            Cover Letter (PDF)
          </a>
        </div>
      </header>

      <section style={styles.section}>
        <h2 style={styles.h2}>About</h2>
        <p style={styles.p}>
          I’m building hands-on skills in IT support, networking, and cloud platforms. I enjoy troubleshooting real-world
          issues, documenting fixes clearly, and using modern tools (including AI) to work efficiently.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>What I can help with</h2>
        <ul style={styles.ul}>
          <li>First-level support: hardware/software, user access, and common Windows/macOS issues</li>
          <li>Networking basics: Wi-Fi troubleshooting, DNS issues, VPN connected but no internal access cases</li>
          <li>Account and access: password resets, MFA basics, device sign-in checks</li>
          <li>Documentation: clear notes, step-by-step fixes, and clean handovers/escalations</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Skills</h2>
        <div style={styles.pills}>
          {[
            "IT Support & Troubleshooting",
            "Windows & macOS",
            "Networking Fundamentals",
            "DNS / VPN Basics",
            "Cloud (GitHub, Codespaces, Vercel)",
            "Security Awareness",
            "Documentation",
            "AI Productivity Tools",
          ].map((s) => (
            <span key={s} style={styles.pill}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Projects</h2>
        <div style={styles.cards}>
          <ProjectCard
            title="Cloud Portfolio Website"
            desc="Personal portfolio built with Next.js and deployed on Vercel. Includes contact links and downloadable Resume and Cover Letter PDFs."
            link={githubRepo}
          />
          <ProjectCard
            title="Network Lab (in progress)"
            desc="Hands-on networking practice: DNS troubleshooting, VPN connectivity, and basic VLAN concepts, documented step-by-step."
            link={githubRepo}
          />
          <ProjectCard
            title="AI Study Assistant"
            desc="Using AI tools to learn faster and improve IT support workflows such as ticket summaries, checklists, and procedures."
            link={linkedin}
          />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Contact</h2>
        <p style={styles.p}>
          Email:{" "}
          <a href={`mailto:${email}`} style={styles.link}>
            {email}
          </a>
        </p>
        <p style={styles.p}>
          LinkedIn:{" "}
          <a href={linkedin} target="_blank" rel="noreferrer" style={styles.link}>
            au.linkedin.com/in/sergii-garbuz
          </a>
        </p>
      </section>

      <footer style={styles.footer}>
        <p style={{ margin: 0 }}>Built with Next.js • Deployed on Vercel</p>
      </footer>
    </main>
  );
}

function ProjectCard({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={styles.card}>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardDesc}>{desc}</div>
      <div style={styles.cardMore}>Open →</div>
    </a>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { maxWidth: 760, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 },
  header: { marginBottom: 28 },
  h1: { fontSize: 44, margin: 0 },
  subhead: { marginTop: 10, opacity: 0.85, fontSize: 18 },

  section: { marginTop: 28 },
  h2: { margin: 0, fontSize: 24 },
  p: { marginTop: 10, opacity: 0.9 },

  ul: { opacity: 0.9, paddingLeft: 18, marginTop: 10 },

  buttonRow: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 },
  buttonSolid: {
    padding: "10px 14px",
    borderRadius: 12,
    fontSize: 14,
    textDecoration: "none",
    display: "inline-block",
    background: "white",
    color: "black",
    border: "1px solid white",
  },
  buttonOutline: {
    padding: "10px 14px",
    borderRadius: 12,
    fontSize: 14,
    textDecoration: "none",
    display: "inline-block",
    background: "transparent",
    color: "inherit",
    border: "1px solid rgba(255,255,255,0.25)",
  },

  pills: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 },
  pill: {
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 14,
    opacity: 0.9,
  },

  cards: { display: "grid", gap: 12, marginTop: 12 },
  card: {
    textDecoration: "none",
    color: "inherit",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 14,
    padding: 16,
    display: "block",
  },
  cardTitle: { fontSize: 18, fontWeight: 700, marginBottom: 6 },
  cardDesc: { opacity: 0.85 },
  cardMore: { marginTop: 10, opacity: 0.75 },

  link: { color: "inherit", textDecoration: "underline" },

  footer: { marginTop: 42, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)", opacity: 0.7 },
};