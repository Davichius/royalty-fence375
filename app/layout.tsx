import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Royalty Fence | Premium Fencing Solutions in Orange City, FL",
    template: "%s | Royalty Fence",
  },
  description: "Professional fence installation & repair services...",
  metadataBase: new URL("https://royaltyfencing.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          roboto.variable,
          poppins.variable,
          "font-sans min-h-screen flex flex-col"
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>

        <Footer />
        <ScrollToTop />

        <div
          className="fixed inset-0 -z-10 opacity-10 pattern-dots pattern-gray-400 pattern-size-4"
          aria-hidden="true"
          role="presentation"
        />
      </body>
    </html>
  );
}