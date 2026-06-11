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
            <div>

                {}
            </div>
        </section>
    )
}