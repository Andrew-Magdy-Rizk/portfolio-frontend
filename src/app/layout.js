import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Neon Logic type: Hanken Grotesk headlines, Inter body, JetBrains Mono labels.
const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Andrew Dakran | Full Stack Software Engineer",
    template: "%s | Andrew Dakran",
  },
  description:
    "Andrew Dakran is a full stack software engineer building scalable, business-focused web applications and systems.",
  openGraph: {
    title: "Andrew Dakran | Full Stack Software Engineer",
    description:
      "Full-stack developer with hands-on experience designing and shipping scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Dakran | Full Stack Software Engineer",
    description: "Full-stack developer building scalable web applications.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
