import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import clsx from "clsx";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Yeseva_One } from "next/font/google";

import { Banner } from "@/components/Banner/Banner";
import { ContentInfo } from "@/components/ContentInfo/ContentInfo";

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva-one",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neet.love"),
  title: {
    default: "neet.love",
    template: "%s | neet.love",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(roboto.variable, yesevaOne.variable, robotoMono.variable)}
    >
      <body
        className={clsx(
          "bg-zinc-50 font-sans antialiased",
          "heropattern-banknote-zinc-100 selection:bg-blue-500 selection:text-white dark:bg-zinc-900 dark:heropattern-banknote-zinc-950",
          "grid min-h-[100svh] grid-cols-[100%] grid-rows-[auto,1fr,auto]",
        )}
      >
        <Banner />
        {children}
        <ContentInfo />
      </body>
    </html>
  );
}
