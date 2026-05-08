import {
  Instrument_Serif,
  JetBrains_Mono,
  Cormorant_Garamond,
  IBM_Plex_Sans,
  Bricolage_Grotesque,
} from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

export const metadata = {
  title: "Andrew Dakran · Full Stack Software Engineer",
  description:
    "Andrew Dakran — full stack software engineer building scalable, business-focused web applications and systems.",
  openGraph: {
    title: "Andrew Dakran · Full Stack Software Engineer",
    description:
      "Full-Stack Developer with two years of hands-on experience designing and shipping scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Dakran · Full Stack Software Engineer",
    description: "Full-Stack Developer building scalable web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable} ${ibmPlexSans.variable} ${bricolageGrotesque.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
