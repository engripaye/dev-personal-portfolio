const projects = [
    {
        title: "Boujuron Fraud Intelligence Platform",
        description: "An AI-powered fraud intelligence platform designed to detect suspicious transactions, " +
            "identify fraud patterns, assess risk scores, and provide actionable insights for financial institutions and businesses.",
        image: "/projects/project1.png",
        tags: ["Python", "FastAPI", "Machine Learning" , "React" , "Microservices", "PostgreSQL", "Docker"],
        link: "https://boujuron.netlify.app/login",
        github: "https://github.com/Phantore-Sentinel-Technology/boujuron-intelligence",
    },

    {
        title: "OAuth2 Identity & Access Management Services",
        description:
            "A secure authentication and authorization platform implementing OAuth2, JWT, Role-Based Access Control (RBAC), and protected APIs for modern applications.",
        image: "/projects/project2.png",
        tags: ["Java 21", "Spring Security", "OAuth2", "JWT", "MySQL", "Docker", "Microservices"],
        link: "https://github.com/engripaye/cross-platform-identity-access-management-system",
        github: "https://github.com/engripaye/cross-platform-identity-access-management-system",
    },

    {
        title: "Movie Recommendation Platform",
        description:
            "A movie discovery and recommendation platform that helps users find films based on genres, ratings, popularity, and personalized preferences. Features movie search, trending movies, detailed movie information, and recommendation capabilities powered by external movie APIs.",
        image: "/projects/project3.png",
        tags: ["Javascript", "React", "TMDB API", "PostgreSQL"],
        link: "https://ipayemovie.netlify.app/",
        github: "https://github.com/engripaye/react-movie-api",
    },

    {
        title: "Secure Microservices Platform",
        description:
            "A cloud-native microservices architecture featuring API Gateway, service discovery, centralized authentication, Docker containerization, and Kubernetes deployment.",
        image: "/projects/project4.png",
        tags: ["Spring Boot", "Docker", "Kubernetes", "JWT", "PostgreSQL"],
        link: "https://github.com/engripaye/microservice-secure-api",
        github: "https://github.com/engripaye/microservice-secure-api",
    },

    {
        title: "Consent & Third-Party Integration System",
        description:
            "A secure consent management platform allowing users to authorize third-party access to services such as GitHub and Google Drive using OAuth2 Authorization Code Flow.",
        image: "/projects/project5.png",
        tags: ["Java", "Spring Boot", "OAuth2", "REST API"],
        link: "https://github.com/engripaye/secure-oauth2-third-party-integration",
        github: "https://github.com/engripaye/secure-oauth2-third-party-integration",
    },

    {
        title: "DevOps CI/CD Automation Pipeline",
        description:
            "An automated software delivery pipeline integrating GitHub, Jenkins, Docker, Kubernetes, monitoring, and Infrastructure as Code for continuous integration and deployment.",
        image: "/projects/project6.png",
        tags: ["Jenkins", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
        link: "https://github.com/engripaye/gitops-cicd-pipeline",
        github: "https://github.com/engripaye/gitops-cicd-pipeline",
    },

    {
        title: "AI Career Transition Assistant",
        description:
            "An AI-powered platform that helps users transition into new careers through skill gap analysis, personalized learning paths, resume evaluation, and job recommendations.",
        image: "/projects/project7.png",
        tags: ["Java", "Spring Boot", "OpenAI", "PostgreSQL"],
        link: "https://github.com/engripaye/new-transition",
        github: "https://github.com/engripaye/new-transition",
    },

    {
        title: "Chat-Based Online Ordering System",
        description:
            "A real-time ordering platform that enables customers to place orders through chat interactions. Features WebSocket communication, order management, payment integration, and AI-assisted customer support.",
        image: "/projects/project8.png",
        tags: ["Java 21", "Spring Boot", "WebSocket", "Redis", "MySQL", "Stomp", "Authentication System", "Order Management"],
        link: "https://github.com/engripaye/chat-based-online-ordering-system",
        github: "https://github.com/engripaye/chat-based-online-ordering-system",
    },


]

export const Projects = () => {
    return (

        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        make an impact. </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A showcase of the software solutions I've built across backend engineering,
                    AI, cloud infrastructure, security, and automation—demonstrating my passion
                    for creating scalable technology that solves real-world problems.
                </p>
            </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((projects, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in">

                            {/* Image */}
                            <div>
                                <img
                                    src={projects.image}
                                    alt={projects.title}
                                    className="w-full h-full object-cover transition duration-700 "
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};