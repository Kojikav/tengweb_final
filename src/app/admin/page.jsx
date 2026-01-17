// src/app/admin/page.js
import AdminHeader from "@/components/admin/adminheader";
import ProductTable from "@/components/admin/producttable";
import { useProducts } from "@/hooks/useProducts";

// Ini adalah Server Component → tidak boleh ada "use client"
export default function AdminPage() {
  const { products } = useProducts();

  return (
    <>
      <AdminHeader />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
          {/* Kirim hanya data, bukan fungsi — biar ProductTable handle sendiri */}
          <ProductTable products={products} />
        </div>
      </div>
    </>
  );
}