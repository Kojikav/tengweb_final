import "./globals.css";
import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
