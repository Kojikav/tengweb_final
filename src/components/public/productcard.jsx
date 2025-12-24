import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, title, price, image }) => {
  return (
    <Link 
      href={`/products/${id}`}
      className="group block"
    >
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
        
        {/* Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 min-h-[3rem]">
            {title}
          </h3>

          {/* Price & Button */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Price</p>
              <p className="text-xl font-bold text-gray-900">
                Rp {price.toLocaleString('id-ID')}
              </p>
            </div>
            
            {/* Quick View Button */}
            <button className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transform group-hover:scale-105 transition-all duration-200">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;