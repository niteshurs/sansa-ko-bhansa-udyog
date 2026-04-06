import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiTiktok,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  BRAND_NAME,
  BRAND_TAGLINE,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  SOCIAL_LINKS,
} from "../seo-config";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "sansakobhansa.com";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const socialLinks = [
    { icon: SiFacebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
    { icon: SiInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: SiX, href: SOCIAL_LINKS.twitter, label: "X (Twitter)" },
    { icon: SiThreads, href: SOCIAL_LINKS.threads, label: "Threads" },
    { icon: SiTiktok, href: SOCIAL_LINKS.tiktok, label: "TikTok" },
    { icon: SiYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
    {
      icon: SiWhatsapp,
      href: SOCIAL_LINKS.whatsapp_channel,
      label: "WhatsApp Channel",
    },
  ];

  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt={BRAND_NAME}
              className="h-12 w-auto object-contain mb-4 brightness-200"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              {BRAND_TAGLINE}. A proud Nepali food brand crafting traditional
              achar pickles and frozen momos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Our Products", to: "/products" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2 items-start">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-brand-primary"
                />
                <span>
                  {ADDRESS_LINE1}
                  <br />
                  {ADDRESS_LINE2}
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={16} className="shrink-0 text-brand-primary" />
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-brand-primary transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} className="shrink-0 text-brand-primary" />
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-brand-primary transition-colors"
                >
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-5">
              <h4 className="text-white font-semibold text-sm mb-3">
                Connect with Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © {year} {BRAND_NAME}. All rights reserved. | Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-primary transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
