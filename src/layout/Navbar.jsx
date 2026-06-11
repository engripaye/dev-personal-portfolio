import { Button } from "../component/Button";
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
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    PM<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) =>(
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}</a>
                        ))}
                    </div>
                </div>
                {/* CTA Button */}
                <div>
                    <Button className="relative flex items-center justify-center gap-2">Contact Me</Button>
                </div>
            </nav>

        </header>
    );
};