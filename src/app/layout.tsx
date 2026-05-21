import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRAPE — Your Wardrobe, Reimagined",
  description:
    "Digitize your entire closet. Craft perfect outfits with AI. Try on anything virtually. Access your style from anywhere in the world. Join the waitlist for early access.",
  keywords: [
    "wardrobe",
    "fashion",
    "AI",
    "virtual try-on",
    "outfit planner",
    "closet organizer",
  ],
  openGraph: {
    title: "DRAPE — Your Wardrobe, Reimagined",
    description:
      "Digitize your entire closet. Craft perfect outfits with AI. Try on anything virtually.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-drape-black text-white antialiased">{children}</body>
    </html>
  );
}
