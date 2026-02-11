export default function Home() {
  const email = "cherokeegarbuz@gmail.com";
  const linkedin = "https://au.linkedin.com/in/sergii-garbuz";
  const portfolioRepo = "https://github.com/Cherokeegarbuz/portfolio-website"; // optional

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px", lineHeight: 1.6 }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 44, margin: 0 }}>Sergey Garbuz</h1>
        <p style={{ marginTop: 10, opacity: 0.85, fontSize: 18 }}>
          Entry-level IT Support • Sydney, NSW • Cloud & AI learner
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
          <a
            href={`mailto:${email}`}
            style={buttonStyle()}
          >
            Email
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            style={buttonStyle("outline")}
          >
            LinkedIn
          </a>

          <a
            href={portfolioRepo}
            target="_blank"
            rel="noreferrer"
            style={buttonStyle("outline")}
          >
            GitHub Repo
          </a>
        </div>
      </header>

      <section style={{ marginTop: 28 }}>
        <h2 style={h2Style()}>About</h2>
        <p style={{ opacity: 0.9 }}>
          I’m building hands-on skills in IT support, networking, and cloud platforms.
          I enjoy troubleshooting real-world problems, documenting fixes clearly, and using modern tools
          (including AI) to work efficiently.
        </p>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={h2Style()}>What I can help with</h2>
        <ul style={{ opacity: 0.9, paddingLeft: 18, marginTop: 10 }}>
          <li>First-level support: hardware/software, user access, and common Windows/macOS issues</li>
          <li>Networking basics: Wi-Fi troubleshooting, DNS issues, VPN “connected but no internal access” cases</li>
          <li>Account & access: password resets, MFA basics, device sign-in checks</li>
          <li>Documentation: clear notes, step-by-step fixes, and clean handovers/escalations</li>
        </ul>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={h2Style()}>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
          {[
            "IT Support & Troubleshooting",
            "Windows & macOS",
            "Networking Fundamentals",
            "Cloud (GitHub, Codespaces, Vercel)",
            "Security Awareness",
            "AI Productivity Tools",
            "Documentation",
          ].map((s) => (
            <span key={s} style={pillStyle()}>{s}</span>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={h2Style()}>Projects</h2>

        <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
          <ProjectCard
            title="Cloud Portfolio Website"
            desc="Personal portfolio built with Next.js and deployed on Vercel using GitHub CI/CD. 
                  Includes resume downloads, contact links, and project showcases."
            link="#"
          />
          <ProjectCard
            title="Network Lab"
            desc="Hands-on network troubleshooting lab covering Wi-Fi issues, 
                  DNS resolution, VPN connectivity, and basic VLAN concepts, with step-by-step documentation."
            link="#"
          <ProjectCard
            title="AI Study Assistant"
            desc="AI-powered study assistant for summarising tickets and support procedures"
            link="#"
          />
        
          
           
            
            link="#"
          />
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={h2Style()}>Contact</h2>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Email: <a href={`mailto:${email}`} style={linkStyle()}>{email}</a>
        </p>
        <p style={{ marginTop: 8, opacity: 0.9 }}>
          LinkedIn: <a href={linkedin} target="_blank" rel="noreferrer" style={linkStyle()}>
            au.linkedin.com/in/sergii-garbuz
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" style={buttonStyle("outline")}>
            Resume (PDF)
         </a>
         <a href="/cover-letter.pdf" target="_blank" rel="noreferrer" style={buttonStyle("outline")}>
         Cover Letter (PDF)
       </a>
        </p>
      </section>

      <footer style={{ marginTop: 42, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)", opacity: 0.7 }}>
        <p style={{ margin: 0 }}>
          Built with Next.js • Deployed on Vercel
        </p>
      </footer>
    </main>
  );
}

function ProjectCard({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <a
      href={link}
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: 14,
        padding: 16,
        display: "block",
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{title}</div>
      <div style={{ opacity: 0.85 }}>{desc}</div>
      <div style={{ marginTop: 10, opacity: 0.75 }}>Details →</div>
    </a>
  );
}

function h2Style() {
  return { margin: 0, fontSize: 24 };
}

function pillStyle() {
  return {
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 14,
    opacity: 0.9,
  } as const;
}

function linkStyle() {
  return { color: "inherit", textDecoration: "underline" } as const;
}

function buttonStyle(variant: "solid" | "outline" = "solid") {
  const base = {
    padding: "10px 14px",
    borderRadius: 12,
    fontSize: 14,
    textDecoration: "none",
    display: "inline-block",
  } as const;

  if (variant === "solid") {
    return {
      ...base,
      background: "white",
      color: "black",
      border: "1px solid white",
    } as const;
  }

  return {
    ...base,
    background: "transparent",
    color: "white",
    border: "1px solid rgba(255,255,255,0.25)",
  } as const;
}