
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
]
export const Navbar = () => {
    return (
        <header>
            <nav>
                <a>
                    PM<span></span>
                </a>

                <div>
                    <div>
                        {navLinks.map((link) =>(
                            <a href>{link.href}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </nav>


        </header>
    );
};