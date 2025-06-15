import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactSocialBar from "@/components/ContactSocialBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Correct metadata declaration (only once)
export const metadata = {
  title: "Manuski Welfare Association",
  description: "Official website of Manuski Welfare Association",
  icons: {
    icon: "/favicon.ico",            // standard browsers
    shortcut: "/favicon.ico",        // pinned tabs
    apple: "/apple-touch-icon.png",  // Apple devices (optional)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ContactSocialBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
