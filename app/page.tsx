const featuredProjects = [
  {
    name: "Pyro",
    timeframe: "Jan 2025 – May 2025",
    summary:
      "A responsive wildfire relief support platform and forum experience with Next.js, Tailwind CSS, and HeroUI, pairing polished UI work with detailed system design documentation.",
    stack: ["Next.js", "Tailwind CSS", "SQL"],
    repoUrl: "https://github.com/NovaByte-CS4800-Group-2/pyro",
  },
  {
    name: "PokéPath",
    timeframe: "Oct 2024 – Dec 2024",
    summary:
      "An interactive elemental-battling desktop game with a dynamic Java Swing interface and a turn-based combat system grounded in object-oriented design.",
    stack: ["Java", "Swing", "MVC"],
    repoUrl: "https://github.com/turtlelover56/CS2450-Final-Project",
  },
  {
    name: "PayMe",
    timeframe: "Oct 2023 – Dec 2023",
    summary:
      "A secure peer-to-peer payments platform with a polished front end and encrypted transaction handling built around Spring Boot.",
    stack: ["React", "Spring Boot", "SQL"],
    repoUrl: "https://github.com/CS3560-02-05-PayMe/PayMe",
  },
];

const skills = [
  { title: "Languages", items: ["Java", "Python", "HTML/CSS", "JavaScript", "TypeScript"] },
  { title: "Front-end", items: ["React.js", "Next.js", "Tailwind CSS", "Figma", "Canva"] },
  { title: "Tools", items: ["Git/GitHub", "Unity", "Microsoft Office", "Google Suite", "AI Coding Agents"] },
];

const experience = [
  {
    role: "IT Security & Compliance Assistant",
    company: "Cal Poly Pomona",
    dates: "Mar 2025 – May 2026",
    points: [
      "Tested and documented accessibility compliance on more than 50 university and commercial websites.",
      "Remediated over 50 PDFs by retagging and restructuring content using Equidox and Adobe Acrobat Pro.",
      "Summarized security documentation from more than 20 vendors to ensure alignment with university protocols.",
    ],
  },
  {
    role: "STEM Instructor Intern",
    company: "Lavner Education",
    dates: "Jun 2024 – Aug 2024",
    points: [
      "Taught programming, robotics, graphic design, and computer skills to children ages 5–12.",
      "Created an encouraging learning environment that supported both curiosity and confidence.",
      "Prepared materials and coordinated smooth daily class transitions.",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_40%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_50%,_#f5f8ff_100%)] text-slate-900">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <main id="main-content" tabIndex={-1} className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <header className="grid gap-8 rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800">
              Recent CS Graduate • Interested in front-end and software development
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Hi, I’m Anastasia Davis.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-800">
                I’m a highly motivated computer science graduate with a strong foundation in user-centered design, accessible web experiences, and collaborative development. I’m especially drawn to front-end work that blends clean visuals with thoughtful engineering.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Anastasia Davis - Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-800"
              >
                Download resume <span className="sr-only">(pdf, opens in a new tab)</span>
              </a>
              <a
                href="https://github.com/turtlelover56"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View GitHub <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anastasiashendavis"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Connect on LinkedIn <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 p-6 text-slate-100 shadow-lg">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              At a glance
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
              <li>• B.S. in Computer Science, Cal Poly Pomona</li>
              <li>• Coursework in UI design, software engineering, cybersecurity, and data structures</li>
              <li>• Passionate about building accessible, polished web experiences</li>
              <li>• Eager to learn and grow in a fast-paced environment</li>
            </ul>
          </div>
        </header>

        <section id="about" aria-labelledby="about-title" className="grid gap-8 rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
              About me
            </h2>
            <h3 id="about-title" className="mt-3 text-2xl font-semibold text-slate-950">
              A thoughtful developer who enjoys turning ideas into usable experiences.
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-800">
              My background spans coursework in computer science, web development, cybersecurity, and UI design. I’ve worked on academic projects that required both strong technical implementation and careful communication, and I’m especially interested in building accessible interfaces that feel intuitive from the first interaction.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
              Education
            </h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="font-semibold text-slate-900">California State Polytechnic University, Pomona</p>
                <p className="text-sm text-slate-800">B.S. Computer Science • summa cum laude • 4.0 GPA</p>
                <p className="text-sm text-slate-800">May 2026</p>
              </div>
              <div>
                <p className="text-sm text-slate-800">Awards: President’s List (2022–2025)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm md:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
            Skills
          </h2>
          <p id="skills-title" className="mt-2 text-2xl font-semibold text-slate-950">
            Core strengths for building thoughtful digital experiences.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <div key={skillGroup.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">{skillGroup.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  {skillGroup.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm md:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
                Featured projects
              </h2>
              <p id="projects-title" className="mt-2 text-2xl font-semibold text-slate-950">
                Applications that reflect both design sensibility and technical growth.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-700">
                    {project.timeframe}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-800">{project.summary}</p>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-800 transition hover:text-cyan-900"
                >
                  View repository →
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="grid gap-8 rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
              Experience
            </h2>
            <p id="experience-title" className="mt-2 text-2xl font-semibold text-slate-950">
              Building practical experience through accessibility and team collaboration.
            </p>
          </div>

          <div className="space-y-5">
            {experience.map((item) => (
              <div key={item.role} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{item.role}</h3>
                  <span className="text-sm text-slate-700">{item.dates}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-800">{item.company}</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-800">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                Let’s connect
              </h2>
              <h3 className="mt-2 text-2xl font-semibold">
                I’m open to junior developer opportunities in collaborative team environments.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:anadavis@gmail.com" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                Email me
              </a>
              <a href="https://github.com/turtlelover56" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
                GitHub profile <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
