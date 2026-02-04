import Link from 'next/link';
import { personal } from '@/lib/content';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-phthalo-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {personal.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="font-heading font-semibold text-lg">
                {personal.name}
              </span>
            </div>
            <p className="text-pewter-blue text-sm max-w-xs">
              {personal.title} | {personal.summary}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/about"
                className="block text-pewter-blue hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="/experience"
                className="block text-pewter-blue hover:text-white transition-colors text-sm"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="block text-pewter-blue hover:text-white transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="block text-pewter-blue hover:text-white transition-colors text-sm"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="block text-pewter-blue hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pewter-blue" />
                <a
                  href={`mailto:${personal.contact.email}`}
                  className="text-pewter-blue hover:text-white transition-colors text-sm"
                >
                  {personal.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pewter-blue" />
                <span className="text-pewter-blue text-sm">
                  {personal.contact.location}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-pewter-blue" />
                <a
                  href={personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pewter-blue hover:text-white transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pewter-blue/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-pewter-blue text-sm">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-pewter-blue text-sm">
                {personal.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
