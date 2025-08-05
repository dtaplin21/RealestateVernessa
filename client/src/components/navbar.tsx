import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/company", label: "Our Company" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" data-testid="brand-link">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Home className="text-primary text-2xl h-8 w-8" />
              <span className="text-xl font-bold text-primary">Building & Houses</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <span
                  className={`cursor-pointer transition-colors ${
                    isActive(item.path)
                      ? "text-primary font-medium border-b-2 border-primary pb-1"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-600" />
              ) : (
                <Menu className="h-6 w-6 text-slate-600" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                  className={`block px-3 py-2 cursor-pointer transition-colors ${
                    isActive(item.path)
                      ? "text-primary font-medium"
                      : "text-slate-600 hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
