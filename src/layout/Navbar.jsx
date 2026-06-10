
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#"></a>
                <a>

                    PM<span>.</span>
                </a>

                {/* Desktop Nav */}
                <div>
                    <div>
                        {navLinks.map((link, index) =>(
                            <a href={link.href} key={index}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </nav>


        </header>
    );
};