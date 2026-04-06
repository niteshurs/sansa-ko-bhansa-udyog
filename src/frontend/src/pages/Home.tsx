import { Link } from "@tanstack/react-router";
import { Award, ChevronRight, Leaf, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiThreads,
  SiTiktok,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si";
import ProductCard from "../components/ProductCard";
import { ACHAR_PRODUCTS, MOMO_PRODUCTS } from "../data/products";
import {
  BRAND_TAGLINE,
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER,
} from "../seo-config";

// SEO: Featured products shown on home page (first 4 of achar category)
const FEATURED_ACHAR = ACHAR_PRODUCTS.slice(0, 4);

export default function Home() {
  // SEO: Update document title and meta description on page load
  useEffect(() => {
    document.title = PAGE_TITLES.home;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", PAGE_DESCRIPTIONS.home);
  }, []);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to place an order from Sansa Ko Bhansa Udyog.")}`;

  const socialLinks = [
    { icon: SiFacebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
    { icon: SiInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: SiX, href: SOCIAL_LINKS.twitter, label: "X" },
    { icon: SiThreads, href: SOCIAL_LINKS.threads, label: "Threads" },
    { icon: SiTiktok, href: SOCIAL_LINKS.tiktok, label: "TikTok" },
    { icon: SiYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
    {
      icon: SiWhatsapp,
      href: SOCIAL_LINKS.whatsapp_channel,
      label: "WhatsApp",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative min-h-[580px] lg:min-h-[700px] flex items-center"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1400x700.jpg')",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* SEO: Hero tagline - keyword-rich for SEO */}
            <span className="inline-block bg-brand-golden text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              🌶️ Authentic Nepali Flavors
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Sansa Ko Bhansa
              <span className="block text-brand-golden">Udyog</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              {BRAND_TAGLINE}. We bring you hand-crafted traditional
              <strong className="text-white"> Nepali achar pickles</strong> and
              freshly made <strong className="text-white">frozen momos</strong>{" "}
              — straight from our kitchen to your table.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Shop Now <ChevronRight size={18} />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
              >
                <SiWhatsapp size={18} className="text-green-500" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-brand-primary text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                desc: "No artificial preservatives",
              },
              {
                icon: Star,
                title: "Authentic Recipes",
                desc: "Traditional Nepali taste",
              },
              {
                icon: Award,
                title: "Quality Assured",
                desc: "Made with premium ingredients",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center justify-center gap-3"
              >
                <Icon size={28} className="shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-sm">{title}</div>
                  <div className="text-xs text-orange-100">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ACHAR */}
      <section
        className="py-16 lg:py-20 bg-white"
        aria-label="Featured Achar products"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
              Our Pickles
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-1">
              Featured <span className="text-brand-primary">Achar</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Handcrafted Nepali pickles using traditional recipes passed down
              through generations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {FEATURED_ACHAR.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard product={product} index={i + 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MOMO */}
      <section
        className="py-16 lg:py-20 bg-orange-50"
        aria-label="Frozen Momo products"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
              Frozen Delights
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-1">
              Our Frozen <span className="text-brand-primary">Momos</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Handmade dumplings stuffed with the freshest ingredients. Ready to
              steam in minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {MOMO_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard product={product} index={i + 1} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/products"
              data-ocid="home.primary_button"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              View All Products <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-16 lg:py-24 bg-white"
        aria-label="About Us"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/assets/generated/chicken-achar-jar.dim_600x600.jpg"
                alt="Authentic Nepali achar preparation"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
                About{" "}
                <span className="text-brand-primary">Sansa Ko Bhansa</span>
              </h2>
              {/* SEO: This text block is rich in keywords naturally */}
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Sansa Ko Bhansa Udyog</strong> is a proud Nepali food
                brand dedicated to preserving the rich flavours of traditional
                Nepali cuisine. We specialize in hand-crafted{" "}
                <strong>achar pickles</strong> — including{" "}
                <em>Chicken Achar</em>, <em>Buff Achar</em>, and{" "}
                <em>Lasun (Garlic) Achar</em> — available in convenient packets
                and premium glass jars.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our <strong>frozen momos</strong> — Chicken, Buff, and Veg — are
                made fresh using the finest ingredients, capturing the authentic
                taste of Kathmandu street food. Every product is made with love,
                care, and a deep respect for Nepali culinary tradition.
              </p>
              <Link
                to="/about"
                data-ocid="about.primary_button"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Learn More <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOLLOW US SECTION */}
      <section
        className="py-16 bg-brand-dark text-white"
        aria-label="Follow us on social media"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold mb-2">
              Follow <span className="text-brand-golden">Us</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Stay updated with new products, promotions, and recipes on our
              social channels.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <s.icon size={24} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
