"use client"; // ← WAJIB untuk komponen dengan interaktivitas atau useRouter/usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminHeader = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/admin" },
    { name: "Products", href: "/admin/products" },
    { name: "Orders", href: "/admin/orders" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Admin */}
          <Link href="/admin" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-md font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Kembali ke Public */}
          <Link
            href="/"
            className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;