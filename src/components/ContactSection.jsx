import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Info */}
          <div className="glass-card p-8 space-y-6">

            <div className="flex gap-4">
              <Mail />
              <span>psaindane09@gmail.com</span>
            </div>

            <div className="flex gap-4">
              <Phone />
              <span>+91 8767634677</span>
            </div>

            <div className="flex gap-4">
              <MapPin />
              <span>Pune, India</span>
            </div>

          </div>

          {/* Form */}
          <div className="glass-card p-8 space-y-4">

            <input
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10"
            />

            <input
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10"
            />

            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10"
            />

            <button className="cosmic-button w-full">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};