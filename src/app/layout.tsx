import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WixClientContextProvider } from "@/context/wixContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Badar - Premium Artisanal Attar",
  description:
    "Discover Al Badar's luxurious artisanal attars, handcrafted with time-honored tradition and premium ingredients. Elevate your senses with our authentic, exclusive fragrances crafted for luxury and distinction.",
  openGraph: {
    title: "Al Badar - Premium Artisanal Attar",
    description:
      "Discover Al Badar's luxurious artisanal attars, handcrafted with time-honored tradition and premium ingredients. Elevate your senses with our authentic, exclusive fragrances crafted for luxury and distinction.",
    url: "https://al-badar.in",
    siteName: "Al Badar",
    images: [
      {
        url: "https://al-badar.in/og-socialimage.png",
        width: 1200,
        height: 630,
        alt: "Al Badar Premium Attar Bottle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Badar - Premium Artisanal Attar",
    description:
      "Discover Al Badar's luxurious artisanal attars, handcrafted with time-honored tradition and premium ingredients.",
    images: ["https://al-badar.in/og-socialimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>

        {/* ✅ Facebook Pixel with Manual Advanced Matching */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            // Example of manual advanced matching
            // Replace with actual dynamic user data when available
            fbq('init', '1078070014412249', {
              em: 'email@example.com', // will be hashed automatically
              ph: '1234567890'         // will be hashed automatically
            });

            fbq('track', 'PageView');
          `}
        </Script>

        {/* Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1078070014412249&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
