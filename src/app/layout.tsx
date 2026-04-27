import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blue Bay Mobility — Complex Rehab & Custom Mobility Solutions",
    template: "%s | Blue Bay Mobility",
  },
  description:
    "Certified Complex Rehab Technology provider. We match you to the right power wheelchair, custom seating, and mobility equipment — and handle insurance so you don't have to.",
  keywords: [
    "complex rehab technology",
    "power wheelchair",
    "custom wheelchair",
    "CRT provider",
    "seating and positioning",
    "mobility equipment",
  ],
  metadataBase: new URL("https://bluebaymobility.com"),
  openGraph: {
    type: "website",
    siteName: "Blue Bay Mobility",
    title: "Blue Bay Mobility — Complex Rehab & Custom Mobility Solutions",
    description:
      "Certified Complex Rehab Technology provider with 22+ years of experience. Guided product selection, expert clinical collaboration, and full insurance support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8faff]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
