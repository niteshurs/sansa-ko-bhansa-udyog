import { Link } from "@tanstack/react-router";
import { Award, ChevronRight, Heart, Leaf, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { BRAND_NAME, PAGE_DESCRIPTIONS, PAGE_TITLES } from "../seo-config";

export default function About() {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = PAGE_TITLES.about;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", PAGE_DESCRIPTIONS.about);
  }, []);

  const values = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      desc: "We use only fresh, natural ingredients with no artificial preservatives.",
    },
    {
      icon: Users,
      title: "Community First",
      desc: "Supporting local farmers and suppliers across Nepal.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      desc: "Every product is prepared with care, using recipes passed through generations.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      desc: "Rigorous quality checks ensure every bite is consistent and delicious.",
    },
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
              Our Story
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
              About <span className="text-brand-golden">{BRAND_NAME}</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A proud Nepali food brand crafting traditional achar pickles and
              frozen momos with authentic recipes and quality ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
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
                src="/assets/generated/lasun-achar-jar.dim_600x600.jpg"
                alt="Authentic Nepali achar making process"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Who We <span className="text-brand-primary">Are</span>
              </h2>
              {/* SEO: This section contains keyword-rich, natural text about the brand */}
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Sansa Ko Bhansa Udyog</strong> was born from a simple
                desire: to share the authentic flavours of Nepali home cooking
                with the world. Based in <strong>Kathmandu, Nepal</strong>, we
                specialize in producing premium <em>achar pickles</em> and{" "}
                <em>frozen momos</em> that carry the warmth and tradition of
                Nepali cuisine.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our range of <strong>Chicken Achar</strong>,{" "}
                <strong>Buff Achar</strong>, and{" "}
                <strong>Lasun (Garlic) Achar</strong> — available in both
                packets and premium glass jars — are crafted using traditional
                spices and techniques that have been refined over generations.
                We believe that great food starts with great ingredients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our <strong>frozen momos</strong> — available in Chicken, Buff,
                and Vegetable varieties — bring the iconic taste of Kathmandu
                street food right into your kitchen. Handmade and frozen fresh,
                they're ready to steam in just minutes.
              </p>
              <Link
                to="/products"
                data-ocid="about.primary_button"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Explore Products <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our <span className="text-brand-primary">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-brand-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
