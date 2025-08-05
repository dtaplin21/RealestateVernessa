import { Home, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Home className="text-secondary text-2xl h-8 w-8" />
              <span className="text-xl font-bold">Building & Houses</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Defining luxury real estate with exceptional properties, innovative design, and unparalleled service excellence since 1985.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="/company" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-company">
                  Our Company
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-reviews">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center" data-testid="contact-phone">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </p>
              <p className="flex items-center" data-testid="contact-email">
                <Mail className="h-4 w-4 mr-2" />
                info@buildinghouses.com
              </p>
              <p className="flex items-center" data-testid="contact-address">
                <MapPin className="h-4 w-4 mr-2" />
                123 Luxury Ave, Beverly Hills, CA 90210
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Building & Houses. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
