// Server-side helper to provide product data to Server Components
import productsData from "@/data/products";

export function useProducts() {
  // Returning as object to match existing usage: const { products } = useProducts();
  return { products: productsData };
}

// Optional: helper to get product by id (server-side)
export function getProductById(id) {
  return productsData.find((p) => String(p.id) === String(id)) || null;
}
