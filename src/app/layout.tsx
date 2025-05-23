import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import SchemaMarkup from "@/components/SchemaMarkup";
import { AuthProvider } from "@/lib/AuthContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "WebGo.",
  description: "WebGo es una empresa de desarrollo de software.",
  keywords:
    "webgo, desarrollo de software, desarrollo de aplicaciones, desarrollo de sitios web, desarrollo de aplicaciones móviles",
  appleWebApp: {
    statusBarStyle: "black",
  },
  icons: {
    icon: [
      { url: "favicons/favicon.ico" },
      { url: "favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "favicons/apple-touch-icon.png" }],
    other: [
      { rel: "android-chrome", url: "favicons/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "favicons/android-chrome-512x512.png" },
    ],
  },

  openGraph: {
    title: "WebGo.",
    description: "WebGo es una empresa de desarrollo de software.",
    url: "https://www.webgo.cl",
    siteName: "WebGo",
    images: [
      {
        url: "https://www.webgo.cl/webgo/webLogo",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`  ${dmSans.variable} font-dmsans`}>
        <AuthProvider>
          <SchemaMarkup />
          {children}
          <Toaster position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
