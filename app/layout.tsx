import "./globals.css"
import type { Metadata } from "next"
import { Roboto, Poppins } from "next/font/google"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ScrollToTop } from "../components/scroll-to-top"
import { cn } from "../lib/utils"
import { ThemeProvider } from "../components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

// Fonts configuration
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-body",
    display: "swap",
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-heading",
    display: "swap",
})

// Metadata configuration
export const metadata: Metadata = {
    title: {
        default: "Royalty Fence | Premium Fencing Solutions in Orange City, FL",
        template: "%s | Royalty Fence",
    },
    description: "Professional fence installation & repair services specializing in aluminum, vinyl, and chain-link fencing. Serving Orange City, FL with 5-star rated service.",
    keywords: [
        "fence installation", "fence repair", "orange city fencing",
        "vinyl fencing", "aluminum fences", "chain-link fencing",
        "fence contractor", "fence company", "fence installation near me"
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://royaltyfencing.com/",
        siteName: "Royalty Fence",
        images: [{
            url: "https://royaltyfencing.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Royalty Fence - Premium Fencing Solutions",
        }],
    },
    twitter: {
        card: "summary_large_image",
        images: "https://royaltyfencing.com/og-image.jpg",
    },
    metadataBase: new URL("https://royaltyfencing.com/"),
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
        { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={cn(
                roboto.variable,
                poppins.variable,
                "font-sans min-h-screen flex flex-col bg-background text-gray-900",
                "dark:bg-gray-950 dark:text-gray-50 antialiased transition-colors duration-300"
            )}>
                {/* Skip Navigation Link */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg dark:focus:bg-gray-800 dark:focus:text-white"
                >
                    Skip to main content
                </a>

                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Header />

                    <main id="main-content" className="flex-1 relative z-10">
                        {children}
                        <Analytics />
                    </main>

                    <Footer />
                    <ScrollToTop />
                </ThemeProvider>

                {/* Background Texture */}
                <div
                    className="fixed inset-0 -z-10 opacity-10 pattern-dots pattern-gray-400 dark:pattern-gray-700 pattern-size-4"

                    aria-hidden="true"
                    role="presentation"
                />
            </body>
        </html >
    )
}