import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiTiktok,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { SOCIAL_LINKS } from "../seo-config";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

const socialIcons = [
  { icon: SiFacebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: SiInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: SiX, href: SOCIAL_LINKS.twitter, label: "X (Twitter)" },
  { icon: SiThreads, href: SOCIAL_LINKS.threads, label: "Threads" },
  { icon: SiTiktok, href: SOCIAL_LINKS.tiktok, label: "TikTok" },
  { icon: SiYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: SiWhatsapp, href: SOCIAL_LINKS.whatsapp_channel, label: "WhatsApp" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Sansa Ko Bhansa Udyog"
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                  currentPath === link.to
                    ? "text-brand-primary border-b-2 border-brand-primary pb-0.5"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons - desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-500 hover:text-brand-primary transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                  currentPath === link.to
                    ? "bg-brand-primary text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-brand-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-500 hover:text-brand-primary transition-colors"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
