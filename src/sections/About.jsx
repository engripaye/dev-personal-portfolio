import { Code2, Rocket, Lightbulb, Users } from "lucide-react";
const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
            <div className="space-y-8">
                <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        one solution at a time.</span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        Ipaye is a passionate Backend and Software Engineer with hands-on experience building scalable applications,
                        APIs, and cloud-native solutions using Java, Python, and modern development technologies.
                        My journey into technology started with a deep curiosity about how software systems work behind the scenes.
                        Over time, that curiosity evolved into a strong interest in backend engineering, distributed systems, DevOps,
                        cloud computing, and AI-powered applications.
                        I enjoy designing reliable systems that solve real-world problems and deliver meaningful value to users.
                    </p>
                    <p>
                        I specialize in Java (Spring Boot), Python (FastAPI), RESTful API development, microservices architecture,
                        SQL and NoSQL databases, containerization with Docker, CI/CD automation, and cloud-native development practices.
                        I am constantly expanding my expertise in Kubernetes, Infrastructure as Code, Artificial Intelligence,
                        and modern software engineering principles.
                    </p>
                    <p>
                        Beyond coding, I actively build personal projects, contribute to technical communities,
                        explore emerging technologies,
                        and continuously improve my skills through hands-on learning.
                        I believe that great engineers never stop learning, adapting, and creating.
                    </p>

                    <p>
                        My long-term goal is to become a world-class Software Engineer and Solutions Architect,
                        building scalable products and innovative technology solutions that impact businesses and people globally.
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "My mission is to build secure, scalable, and impactful software solutions
                        that solve real-world problems, while continuously growing as an engineer and
                        contributing to the future of technology through innovation, learning, and collaboration."
                    </p>

            </div>
            </div>
            </div>
        </div>

    </section>
    )
}