import Link from "next/link";

const skills = [
  "Apex & Triggers",
  "Lightning Web Components (LWC)",
  "Salesforce Flows",
  "SOQL / SOSL / SAQL",
  "Visualforce",
  "REST API & Integration",
  "Service Cloud",
  "Experience Cloud",
  "Data Cloud & Agentforce",
  "CRM Analytics (Recipes / Data Flows)",
  "SFDX / Managed Package Deployment",
  "Security, Sharing Rules & SSO",
  "GitLab & DevOps (CI/CD)",
  "Java & Spring Boot",
];

const competencies = [
  "Software Development",
  "Programming",
  "Technical Support",
  "Technical Analysis",
  "API Design Knowledge",
  "Code Versioning",
  "Continuous Integration (CI)",
  "Continuous Delivery (CD)",
];

const experiences = [
  {
    role: "Senior Salesforce Consultant",
    company: "HCLTech",
    period: "Dec 2025 – Present",
    location: "Noida, India",
    highlights: [
      "Collaborated in an Agile development environment as a Senior Salesforce Consultant to deliver enterprise solutions.",
      "Developed tailored solutions for Case Management using both out-of-the-box configurations and custom code.",
      "Engaged directly with stakeholders to analyze business use cases and align Salesforce implementations with organizational goals.",
      "Enhanced team productivity and project outcomes through Agile methodologies and engineering best practices.",
    ],
  },
  {
    role: "Developer Support Engineer",
    company: "Salesforce",
    period: "Mar 2022 – Dec 2025",
    location: "Hyderabad, India",
    highlights: [
      "Developed custom CRM solutions utilizing Apex, Triggers, Lightning Web Components (LWC), Visualforce, and Flows.",
      "Provided specialized Technical Developer Support to enterprise customers across Apex, LWC, CRM Analytics, Dashboards/Reports, Approval Processes, Data Flows, and Recipes.",
      "Translated complex technical concepts into clear terms for non-technical stakeholders to promote cross-functional alignment.",
      "Resolved critical customer escalations by walking engineering and admin teams through structured debugging and troubleshooting.",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services (TCS)",
    period: "Jul 2019 – Feb 2022",
    location: "Mumbai, India",
    highlights: [
      "Developed enterprise-grade Microservices and REST APIs using Java Spring Boot backend architecture.",
      "Worked with Azure AD APIs and successfully integrated authentication workflows with enterprise applications.",
      "Performed comprehensive unit testing with JUnit and Mockito alongside API verification using Swagger and Postman.",
      "Executed performance and load testing using Apache JMeter and managed relational data on Oracle and PostgreSQL databases.",
      "Proposed technical feasibility solutions for new system designs and optimized performance of core backend components.",
    ],
  },
];

const certifications = [
  {
    title: "Salesforce Certified Data Cloud Consultant",
    issuer: "Salesforce",
    date: "Mar 2025",
  },
  {
    title: "Salesforce Certified Agentforce Service Consultant",
    issuer: "Salesforce",
    date: "Jan 2025",
  },
  {
    title: "Salesforce Certified Experience Cloud Consultant",
    issuer: "Salesforce",
    date: "Dec 2024",
  },
  {
    title: "Salesforce Certified Advanced Administrator (SCA)",
    issuer: "Salesforce",
    date: "Feb 2024",
  },
  {
    title: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "Aug 2023",
  },
  {
    title: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    date: "Jun 2023",
  },
  {
    title: "Salesforce Certified Service Cloud Consultant",
    issuer: "Salesforce",
    date: "Oct 2022",
  },
  {
    title: "Salesforce Certified Administrator (SCA)",
    issuer: "Salesforce",
    date: "Jul 2022",
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "IMS Engineering College",
    period: "Jul 2015 – Jun 2019",
    location: "Ghaziabad, India",
  },
  {
    degree: "Higher Secondary Education (CBSE)",
    institution: "Pinewood School",
    period: "Apr 2013 – Mar 2015",
    location: "Saharanpur, India",
  },
  {
    degree: "Secondary Education (ICSE)",
    institution: "Infant Jesus School",
    period: "Apr 2012 – Mar 2013",
    location: "Saharanpur, India",
  },
];

export default async function PortfolioPage() {
  "use cache";
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            <span>8x Salesforce Certified</span>
            <span>•</span>
            <span>7 Years in Software Development</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Sourav Das
          </h1>
          <p className="text-xl md:text-2xl font-medium text-blue-400 mb-6">
            Senior Salesforce Consultant / Developer / Administrator
          </p>
          <p className="max-w-3xl text-slate-300 text-base md:text-lg leading-relaxed mb-8">
            Salesforce Developer and Senior Consultant with{" "}
            <strong className="text-white">7 years of total development experience</strong>{" "}
            and <strong className="text-white">5 years specializing in the Salesforce ecosystem</strong>. 
            Adept at architecting scalable CRM solutions, Case Management implementations, 
            Apex/LWC customizations, and enterprise REST API integrations in Agile & DevOps environments.
          </p>

          {/* Contact & CTA Bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:sourav.das1804@gmail.com"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg transition"
            >
              Contact Me
            </a>
            <Link
              href="/projects/task-tracker"
              className="bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-medium px-5 py-2.5 rounded-lg transition flex items-center gap-2"
            >
              <span>View Live Task Tracker App</span>
              <span className="text-blue-400">→</span>
            </Link>
            <a
              href="https://www.linkedin.com/in/sourav-das-27b9b6162"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 px-3 py-2 transition"
            >
              LinkedIn ↗
            </a>
            <span className="text-slate-400 px-2">📞 +91 9548885880</span>
            <span className="text-slate-400 px-2">📍 Saharanpur / Noida, India</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
              <p>
                As a Senior Salesforce Consultant at <strong className="text-white">HCLTech</strong>, 
                I collaborate in Agile teams to deliver tailored Salesforce solutions, contributing 
                to complex case management implementations through both out-of-the-box declarative 
                configurations and programmatic customizations.
              </p>
              <p>
                Previously at <strong className="text-white">Salesforce</strong> and{" "}
                <strong className="text-white">Tata Consultancy Services (TCS)</strong>, I built a strong 
                foundation in enterprise backend architecture (Java Spring Boot, Microservices, PostgreSQL) 
                and provided deep technical support across Apex, LWC, CRM Analytics, Data Flows, and Recipes.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp) => (
                  <span
                    key={comp}
                    className="text-xs bg-slate-800 text-slate-200 px-3 py-1.5 rounded-md border border-slate-700"
                  >
                    {comp}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Languages
                </h4>
                <p className="text-sm text-slate-300">
                  English (Professional) • Hindi (Native)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-10">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 md:p-8 hover:border-slate-700 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-400 mt-2 md:mt-0 md:text-right">
                    <p className="font-medium text-slate-300">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm md:text-base">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Projects Showcase Section */}
      <section id="projects" className="py-16 border-b border-slate-900 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Live Projects</h2>
              <p className="text-sm text-slate-400 mt-1">
                Interactive full-stack applications deployed in production
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Full-Stack Web App
                  </span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Live Demo
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Cloud Task Tracker
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  A decoupled full-stack task management application featuring asynchronous REST API 
                  endpoints, strict Pydantic schema validation, and cloud PostgreSQL persistence.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js (React)", "TypeScript", "Python FastAPI", "SQLAlchemy ORM", "Neon PostgreSQL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <Link
                href="/projects/task-tracker"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition w-full"
              >
                Launch Task Tracker App →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-16 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education Section */}
      <section id="certifications" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Salesforce Certifications (8x)
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-900 border border-slate-800 rounded-xl"
                >
                  <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm text-blue-400 mt-0.5">{edu.institution}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Sourav Das. Built with Next.js & FastAPI.</p>
          <div className="flex gap-4">
            <a href="mailto:sourav.das1804@gmail.com" className="hover:text-slate-300">
              sourav.das1804@gmail.com
            </a>
            <Link href="/projects/task-tracker" className="hover:text-blue-400">
              Live Task Tracker
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}