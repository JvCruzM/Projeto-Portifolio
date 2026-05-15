import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Portfólio | João Vitor Cruz de Menezes",
  description: "Meu portfólio pessoal e currículo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-gray-100 min-h-screen flex flex-col font-sans">
        <Navbar />

        <main className="flex-grow max-w-4xl w-full mx-auto p-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}