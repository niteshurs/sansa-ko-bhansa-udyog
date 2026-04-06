import { SiWhatsapp } from "react-icons/si";
import { WHATSAPP_NUMBER } from "../seo-config";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "achar" | "momo";
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const message = encodeURIComponent(
    `Hello! I'd like to order ${product.name} from Sansa Ko Bhansa Udyog.`,
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div
      data-ocid={`products.item.${index}`}
      className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="relative overflow-hidden aspect-square bg-orange-50">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-brand-golden text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`products.primary_button.${index}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-brand-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <SiWhatsapp size={16} />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
