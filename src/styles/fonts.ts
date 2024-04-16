import { Bebas_Neue, Besley } from "next/font/google";

export const fontPrimary = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-primary"
});

export const fontSecondary = Besley({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-secondary"
});