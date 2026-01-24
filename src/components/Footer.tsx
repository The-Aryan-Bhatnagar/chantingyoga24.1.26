import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Yoga & Wellness",
      links: [
        { label: "Meditation", path: "/meditation" },
        { label: "Pranayam", path: "/pranayam" },
        { label: "Yoga Diet", path: "/yoga-diet" },
        { label: "Yoga Types", path: "/yoga-types" },
        { label: "Ageing Yoga", path: "/ageing-yoga" },
        { label: "Illness & Yoga", path: "/illness-yoga" },
      ],
    },
    {
      title: "Learning Resources",
      links: [
        { label: "Books", path: "/books" },
        { label: "Library", path: "/library" },
        { label: "Audio Sessions", path: "/audios" },
        { label: "Video Library", path: "/videos" },
        { label: "Teaching Courses", path: "/courses" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "Ethics", path: "/ethics" },
        { label: "Facts & Myths", path: "/facts-myths" },
        { label: "Stress Buster", path: "/stress-buster" },
        { label: "Bhakti Yoga", path: "/bhakti-yoga" },
        { label: "Ancient Roots", path: "/ancient-roots" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Testimonials", path: "/testimonials" },
        { label: "Gallery", path: "/gallery" },
        { label: "FAQ", path: "/faq" },
        { label: "Disclaimer", path: "/disclaimer" },
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms & Conditions", path: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-primary mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-card rounded-xl p-6 mb-8 border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-muted-foreground">
                Get updates on new programs, wellness tips, and more
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground flex-1 md:w-64"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🕉️</span>
            <span className="text-lg font-bold text-primary">Chanting Yoga</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="mailto:info@chantingyoga.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Chanting Yoga. All Rights Reserved.
          </p>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-lg italic text-primary">
            "In every breath, there is sound. In every sound, there is peace."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
