import Link from "next/link";
import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/libre-baskerville/400.css";
import "./globals.css";
export const metadata: Metadata = {
 title: "BOURN — Beyond destinations.",
 manifest: "/manifest.webmanifest",
 description: "Plan, budget, and shape your Bali trip with BOURN. A personal travel planning and concierge prototype.",
};
export default function RootLayout({children}: {children: React.ReactNode}) {
 return <html lang="en"><body><Link className="skip-link" href="#main-content">Skip to content</Link><div id="main-content">{children}</div></body></html>;
}
