import ProductCard from "@/components/public/productcard";
import products from "@/data/products";

export const metadata = {
  title: "Products | TengWeb Store",
};

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <p className="text-sm text-gray-600">Explore our available products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
