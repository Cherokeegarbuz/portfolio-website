import Link from "next/link";

const projects = [
  {
    title: "SOC Detection Engineering Lab",
    description:
      "Built and tested detection ideas using KQL-style logic and hands-on SOC workflows. Practised identifying encoded PowerShell, suspicious parent-child process chains, privilege escalation activity, and incident response decision-making.",
    skills: [
      "KQL",
      "Threat Detection",
      "SOC Analysis",
      "Incident Response",
      "PowerShell",
      "Windows Event Logs",
    ],
    link: "/SOC_KQL_Portfolio.pdf",
    linkLabel: "View SOC Playbook",
  },
  {
    title: "Active Directory Home Lab",
    description:
      "Built a Windows Server and client lab to practise domain administration, user and group management, permissions troubleshooting, log analysis, and security investigation workflows in a realistic environment.",
    skills: [
      "Active Directory",
      "Windows Server",
      "UTM",
      "Group Policy",
      "Event Viewer",
      "Access Control",
    ],
  },
  {
    title: "Cybersecurity Portfolio Website",
    description:
      "Designed and updated a personal portfolio website to showcase practical labs, projects, and technical development while learning GitHub, deployment workflows, and modern web presentation.",
    skills: ["Next.js", "TypeScript", "GitHub", "Vercel", "Web Development"],
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-10 md:py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Sergii Garbuz
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Aspiring SOC Analyst building practical cybersecurity skills
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
              I am developing hands-on experience through home lab work focused
              on threat detection, Active Directory, Windows security logs,
              incident response thinking, and real analyst-style investigation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                View Projects
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Resume
              </Link>

              <Link
                href="/cover-letter.pdf"
                target="_blank"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Cover Letter
              </Link>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white">Core Focus Areas</h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-neutral-400">
              This portfolio highlights practical work in security operations,
              home lab development, detection thinking, and technical growth
              toward a junior SOC analyst role.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Practical learning, home labs, and real investigation mindset
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-300">
              I am focused on building job-ready cybersecurity skills through
              structured hands-on practice. My current work includes Active
              Directory lab exercises, Windows event log investigation,
              PowerShell-related detection scenarios, and SOC-style analyst
              reasoning around phishing, privilege escalation, and incident
              response.
            </p>

            <p className="mt-4 text-base leading-8 text-neutral-300">
              I enjoy learning by doing, especially when I can simulate real
              attack chains, investigate suspicious activity, and turn that
              process into practical documentation and portfolio projects.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Cybersecurity Projects and Lab Work
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
            These projects show the practical side of my learning, including lab
            building, detection thinking, analyst workflows, and technical
            problem solving.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="mt-4 flex-grow text-sm leading-7 text-neutral-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="mt-6">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex rounded-2xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                    >
                      {project.linkLabel}
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Documents
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Portfolio Documents
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
              These documents support my applications and show both professional
              presentation and practical cybersecurity work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                View Resume
              </Link>

              <Link
                href="/cover-letter.pdf"
                target="_blank"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View Cover Letter
              </Link>

              <Link
                href="/SOC_KQL_Portfolio.pdf"
                target="_blank"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View SOC Playbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Let’s connect
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-300">
                I am actively building toward an entry-level SOC analyst or IT
                support opportunity and enjoy practical environments where I can
                keep learning, contribute, and grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/in/sergii-garbuz/"
                target="_blank"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                LinkedIn
              </Link>

              <Link
                href="mailto:your@email.com"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Email Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
