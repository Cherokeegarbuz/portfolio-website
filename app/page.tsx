export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Sergey Garbuz</h1>

      <p style={{ fontSize: 18, opacity: 0.8 }}>
        Entry-level IT Support • Sydney, NSW • Cloud & AI learner
      </p>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 22 }}>About</h2>
        <p style={{ maxWidth: 700, lineHeight: 1.6 }}>
          I’m building hands-on skills in IT support, networking, and cloud
          platforms. I enjoy troubleshooting, documenting fixes, and using AI
          to improve workflows.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 22 }}>Skills</h2>
        <ul>
          <li>IT Support & Troubleshooting</li>
          <li>Networking Fundamentals</li>
          <li>Cloud (GitHub, Codespaces, Vercel)</li>
          <li>Security Awareness</li>
          <li>AI Productivity Tools</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 22 }}>Projects</h2>
        <ul>
          <li>Cloud Portfolio Website (this site)</li>
          <li>Network Lab (in progress)</li>
          <li>AI Study Assistant</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 22 }}>Contact</h2>
        <p>Email: your@email.com</p>
        <p>LinkedIn: linkedin.com/in/yourname</p>
      </section>
    </main>
  );
}