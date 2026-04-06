import { Mail, MapPin, MessageCircle, Phone, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import {
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  EMAIL_ADDRESS,
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
  PHONE_NUMBER,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER,
} from "../seo-config";

export default function Contact() {
  // SEO: Update document title on page load
  useEffect(() => {
    document.title = PAGE_TITLES.contact;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", PAGE_DESCRIPTIONS.contact);
  }, []);

  const generalMessage = encodeURIComponent(
    "Hello! I'd like to get in touch with Sansa Ko Bhansa Udyog.",
  );
  const orderMessage = encodeURIComponent(
    "Hello! I'd like to place an order. Could you please share your current product list and prices?",
  );

  const waGeneralUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generalMessage}`;
  const waOrderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${orderMessage}`;

  const socialLinks = [
    { icon: SiFacebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
    { icon: SiInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: SiX, href: SOCIAL_LINKS.twitter, label: "X (Twitter)" },
    { icon: SiThreads, href: SOCIAL_LINKS.threads, label: "Threads" },
    { icon: SiTiktok, href: SOCIAL_LINKS.tiktok, label: "TikTok" },
    { icon: SiYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Get In Touch
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Contact <span className="text-brand-golden">Us</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">
              Have questions about our products? Ready to place an order? Reach
              out to us on WhatsApp for the fastest response!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                Contact <span className="text-brand-primary">Information</span>
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    {/* SEO: Edit ADDRESS_LINE1 and ADDRESS_LINE2 in seo-config.ts */}
                    <p className="text-gray-600 text-sm">
                      {ADDRESS_LINE1}
                      <br />
                      {ADDRESS_LINE2}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    {/* SEO: Edit PHONE_NUMBER in seo-config.ts */}
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-gray-600 text-sm hover:text-brand-primary transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    {/* SEO: Edit EMAIL_ADDRESS in seo-config.ts */}
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="text-gray-600 text-sm hover:text-brand-primary transition-colors"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 hover:text-brand-primary hover:border-brand-primary transition-colors"
                    >
                      <s.icon size={16} /> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                Order via <span className="text-brand-primary">WhatsApp</span>
              </h2>

              <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <SiWhatsapp size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Order on WhatsApp
                    </h3>
                    <p className="text-sm text-gray-500">
                      Fastest way to place your order
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  Click the button below to start a WhatsApp chat with us. Tell
                  us what products you'd like, your delivery address, and we'll
                  take care of the rest!
                </p>
                <a
                  href={waOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.primary_button"
                  className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <ShoppingCart size={20} />
                  Place an Order
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <MessageCircle size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Send a Message</h3>
                    <p className="text-sm text-gray-500">
                      General enquiries & feedback
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  Have a question about our products, ingredients, or
                  availability? Drop us a message and we'll get back to you as
                  soon as possible.
                </p>
                <a
                  href={waGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.secondary_button"
                  className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl bg-brand-primary text-white font-bold transition-opacity hover:opacity-90"
                >
                  <SiWhatsapp size={20} />
                  Send Message on WhatsApp
                </a>
              </div>

              {/* Note */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-800">
                <strong>💡 Note:</strong> Free delivery in Kathmandu on orders
                above Rs. 500. Contact us for bulk orders and special pricing.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
