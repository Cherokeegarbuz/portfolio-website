"use client";

import React from "react";

type ProjectCardProps = {
  title: string;
  desc: string;
  link: string;
};

function ProjectCard({ title, desc, link }: ProjectCardProps) {
  return (
    <div
      style={{
        background: "#111",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid #222",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>

      <p style={{ color: "#ccc", marginBottom: "12px" }}>{desc}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#4da3ff",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        Open →
      </a>
    </div>
  );
}

export default function Home() {
  const container: React.CSSProperties = {
    minHeight: "100vh",
    background: "#0b0b0c",
    color: "#fff",
    padding: "30px 20px",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
  };

  return (
    <main style={container}>
      {/* Header */}
      <h1 style={{ fontSize: "32px", marginBottom: "6px" }}>Sergey Garbuz</h1>

      <p style={{ color: "#aaa", marginBottom: "25px" }}>
        IT Support • Cloud • Cybersecurity • Junior SOC / Help Desk
      </p>

      {/* Projects */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Projects</h2>

        <ProjectCard
          title="Cloud Portfolio Website"
          desc="Personal portfolio built with Next.js and deployed on Vercel. Includes resume, cover letter, and contact links."
          link="#"
        />

        <ProjectCard
          title="Network Lab (In Progress)"
          desc="Hands-on networking practice: DNS troubleshooting, VPN connectivity, VLAN basics, and documentation."
          link="#"
        />

        <ProjectCard
          title="AI Study Assistant"
          desc="Using AI tools to improve IT support workflows: ticket summaries, checklists, and troubleshooting guides."
          link="#"
        />
      </section>

      {/* Contact */}
      <section>
        <h2 style={{ marginBottom: "15px" }}>Contact</h2>

        <p>
          Email:{" "}
          <a
            href="mailto:cherokeegarbuz@gmail.com"
            style={{ color: "#4da3ff" }}
          >
            cherokeegarbuz@gmail.com
          </a>
        </p>

        <p style={{ marginTop: "6px" }}>
          LinkedIn:{" "}
          <a
            href="https://au.linkedin.com/in/sergii-garbuz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4da3ff" }}
          >
            au.linkedin.com/in/sergii-garbuz
          </a>
        </p>

        <div style={{ marginTop: "15px" }}>
          <a
            href="/resume.pdf"
            style={{
              display: "inline-block",
              marginRight: "12px",
              padding: "8px 14px",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Resume (PDF)
          </a>

          <a
            href="/cover-letter.pdf"
            style={{
              display: "inline-block",
              padding: "8px 14px",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Cover Letter (PDF)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "50px",
          paddingTop: "15px",
          borderTop: "1px solid #222",
          color: "#777",
          fontSize: "14px",
        }}
      >
        Built with Next.js • Deployed on Vercel
      </footer>
    </main>
  );
}