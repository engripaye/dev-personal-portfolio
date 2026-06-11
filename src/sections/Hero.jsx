export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

    {/* Bg */}
            <div className="absolute inset-0">
                <img
                     src="/hero-bg.jpg"
                     alt="Hero image"
                     className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {[...Array(30)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20b2a6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20 
                        }s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,

                        }
                    }
                    />
                ))}
            </div>

            {/* content*/}
            <div>
                <div>
                    {/* Left Column - Text Content*/}
                    <div>
                        <div>
                            <span className="w-2 h-2 bg-primary rounded-full"> Software Engineer * Python | Java Specialist</span>
                        </div>
                    </div>
                    {/* Right Column - Profile Image*/}


                </div>
            </div>
        </section>
    )
}