import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/yoga-wellness", label: "Yoga & Wellness" },
    { path: "/yoga-poses", label: "Yoga Poses" },
    { path: "/services", label: "Services" },
    { path: "/media", label: "Media" },
    { path: "/research", label: "Research" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-2xl">🕉️</div>
            <span className="text-2xl font-bold text-primary transition-colors group-hover:text-accent">
              Chanting Yoga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden py-4">
          {/* Logo on top - centered */}
          <Link to="/" className="flex items-center justify-center gap-2 group mb-4">
            <div className="text-2xl">🕉️</div>
            <span className="text-xl font-bold text-primary transition-colors group-hover:text-accent">
              Chanting Yoga
            </span>
          </Link>

          {/* Mobile Navigation - row layout */}
          <nav className="flex flex-row flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
