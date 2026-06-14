import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "b.tunde.ipaye@gmail.com",
        href: "mailto:b.tunde.ipaye@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+234 (814) 505 -5049",
        href: "tel:+2348145055049",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Lagos, Nigeria",
        href: "#",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        }
    );

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error'
        message: "",
    });

    const handleSubmit = async (e) =>{
        e,prevwntDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        }catch (err) {

        }finally {
            setIsLoading(false);
        }
    }
    return (

    <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Let's build{" "}
                    <span className="font-serif italic font-normal text-white">
              something great.
            </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Have a project in mind? I'd love to hear about it. Send me a message
                    and let's discuss how we can work together.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name"
                                   className="block text-sm font-medium mb-2">
                                Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                placeholder="your name..."
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                type="text"
                                className="block text-sm font-medium mb-2"

                            >Email
                            </label>
                            <input
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >Message
                            </label>
                            <textarea
                                rows={5}
                                required
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="your message..."
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                        </div>
                        <Button className="w-full" type="submit" size="lg">
                            Send Message
                            <Send />

                        </Button>
                    </form>
                </div>
            </div>

        </div>
    </section>

    );

};