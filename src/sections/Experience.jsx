const experience = [
    {
        period: "2025 — Present",
        role: "Founder & Lead Software Engineer",
        company: "Boujorun Intelligence",
        description:
            "Leading the development of an AI-powered fraud intelligence platform focused on fraud detection, risk assessment, transaction monitoring, and business intelligence. Responsible for backend architecture, API development, AI integration, and cloud deployment strategies.",
        technologies: [
            "Python",
            "FastAPI",
            "Machine Learning",
            "PostgreSQL",
            "Docker"
        ],
        current: true,
    },

    {
        period: "2024 — Present",
        role: "Software Engineer & Independent Developer",
        company: "Personal Projects & Open Source",
        description:
            "Building scalable backend systems, cloud-native applications, and AI-powered solutions using Java and Python. Developed projects including the AI Career Transition Assistant, OAuth2 Identity & Access Management System, Secure Microservices Platform, Movie Recommendation Platform, and Chat Commerce Platform.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "Python",
            "FastAPI",
            "Docker",
            "PostgreSQL"
        ],
        current: true,
    },

    {
        period: "2023 — 2024",
        role: "Backend Developer",
        company: "Personal Engineering Projects",
        description:
            "Designed and developed secure backend services, REST APIs, authentication systems, OAuth2 integrations, and database-driven applications. Focused on scalable architectures, API security, and modern software engineering practices.",
        technologies: [
            "Spring Security",
            "OAuth2",
            "JWT",
            "MySQL",
            "REST API"
        ],
        current: false,
    },

    {
        period: "2022 — 2023",
        role: "Cloud & DevOps Engineer",
        company: "Personal Engineering Projects",
        description:
            "Implemented CI/CD pipelines and containerized deployments using Docker, Jenkins, Kubernetes, and Infrastructure as Code. Automated software delivery processes and improved deployment reliability.",
        technologies: [
            "Docker",
            "Jenkins",
            "Kubernetes",
            "Terraform",
            "GitHub Actions"
        ],
        current: false,
    },

    {
        period: "2020 — 2022",
        role: "PHP Developer",
        company: "Gilgalh Limited",
        description:
            "Developed and maintained dynamic web applications, business websites, and database-driven solutions. Worked on backend development, API integrations, bug fixing, performance optimization, and MySQL database management while collaborating with cross-functional teams to deliver client solutions.",
        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS",
            "Apache"
        ],
        current: false,
    },

    {
        period: "2019 — 2020",
        role: "Junior Software Developer",
        company: "Freelance & Personal Projects",
        description:
            "Started building web applications and backend systems while learning software engineering fundamentals. Developed websites, experimented with databases, APIs, and open-source technologies, laying the foundation for a career in backend engineering.",
        technologies: [
            "PHP",
            "JavaScript",
            "MySQL",
            "HTML",
            "CSS"
        ],
        current: false,
    },
];

export const Experience = () => {
    return (
    <section
        id="experience"
        className="py-32 relative overflow-hidden">
        <div
            className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header*/}
            <div className="max-w-3xl mb-16">
                <span
                    className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
                >
                    Career Journey
                </span>
                <h2
                    className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
                >
                    Experience that{" "}
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        speaks volumes. </span>
                </h2>
                <p
                    className="text-muted-foreground
           animate-fade-in animation-delay-200"
                >
                    A timeline of my growth as a software engineer—from a curious beginner exploring web
                    development to building AI-powered applications, scalable backend systems,
                    cloud-native solutions, and innovative products that solve real-world challenges.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

                {/* Experience Items */}
                <div className="space-y-12 ">
                    {experience.map((exp, idx) => (
                        <div key={idx}>

                            {/* Timeline Dots */}
                            <div></div>

                            {/* Content */}
                            <div>
                                <div>
                                    <span>{exp.period}</span>
                                    <h3>{exp.role}</h3>
                                    <p>{exp.company}</p>
                                    <p>{exp.description}</p>
                                    <div>
                                        {exp.technologies.map((tech, techIdx) =>(
                                            <span>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    )}

                </div>
            </div>
        </div>


    </section>
    )
}