
const testimonials = [
    {
        quote:
            "Olabowale consistently demonstrates a strong passion for software engineering. His ability to learn quickly and build practical solutions using Java and Python makes him a valuable developer with great potential.",
        author: "Project Collaborator",
        role: "Software Engineer",
        avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
        quote:
            "His work on backend systems, API development, and cloud-native projects reflects a solid understanding of modern software engineering practices. He approaches challenges with curiosity and determination.",
        author: "Technical Mentor",
        role: "Senior Backend Engineer",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
        quote:
            "Olabowale is always eager to improve and take on complex technical challenges. His projects demonstrate strong problem-solving skills, attention to detail, and a commitment to continuous learning.",
        author: "Engineering Peer",
        role: "Software Developer",
        avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
        quote:
            "From AI-powered applications to secure backend systems, Olabowale consistently builds projects that address real-world problems while applying industry best practices in software development.",
        author: "Open Source Contributor",
        role: "Backend Engineer",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
];

export const Testimonials = () => {
    return <section
    id="testimonials"
    className="py-32 relative oveflow-hidden">
        <div
            className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <div
            className="container mx-auto
      px-6 relative z-10"
        >

            {/* Section Header */}
            <div
                className="text-center max-w-3xl
        mx-auto mb-16"
            >
          <span
              className="text-secondary-foreground
          text-sm font-medium tracking-wider
          uppercase animate-fade-in"
          >
            What People Say
          </span>
                <h2
                    className="text-4xl md:text-5xl
          font-bold mt-4 mb-6 animate-fade-in
          animation-delay-100 text-secondary-foreground"
                >
                    Kind words from{" "}
                    <span
                        className="font-serif italic
            font-normal text-white"
                    >
              amazing people.
            </span>
                </h2>
            </div>

        </div>
    </section>
}