import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://recipe-master.vercel.app'),
  title: {
    default: "Recipe Master - Rețete Delicioase pentru Orice Ocazie",
    template: "%s | Recipe Master",
  },
  description: "Descoperă rețete delicioase pentru orice ocazie. De la cine rapide în timpul săptămânii la deserturi impresionante, găsește următorul tău fel preferat pe Recipe Master.",
  keywords: ["rețete", "gătit", "mâncare", "deserturi", "fel principal", "mâncare sănătoasă"],
  authors: [{ name: "Recipe Master" }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://recipe-master.vercel.app",
    siteName: "Recipe Master",
    title: "Recipe Master - Rețete Delicioase pentru Orice Ocazie",
    description: "Descoperă rețete delicioase pentru orice ocazie. De la cine rapide în timpul săptămânii la deserturi impresionante.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recipe Master",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipe Master - Rețete Delicioase pentru Orice Ocazie",
    description: "Descoperă rețete delicioase pentru orice ocazie.",
    images: ["/og-image.jpg"],
  },
  other: {
    "google-adsense-account": "ca-pub-2380500198060818",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-zinc-50/80 relative">
             <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
             <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(234,88,12,0.13)_0,rgba(234,88,12,0)_50%,rgba(234,88,12,0)_100%)]"></div>
             </div>
            <Header />
            <main className="flex-grow">
              <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
