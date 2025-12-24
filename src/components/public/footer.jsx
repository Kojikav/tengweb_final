import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-gray-200 mt-10 border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Product Store
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Your trusted destination for quality products. Simple, modern, and reliable shopping experience built with Next.js.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-pink-600 hover:text-pink-600 transition-all duration-200 hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition-all duration-200 hover:shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-blue-700 hover:text-blue-700 transition-all duration-200 hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} <span className="font-semibold">Product Store</span>. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}