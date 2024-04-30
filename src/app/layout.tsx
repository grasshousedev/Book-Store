import { LayoutContainer } from "@/domains/layout/containers/layout-container";
import { fontPrimary, fontSecondary } from "../assets/styles/fonts";
import "../assets/styles/globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} font-secondary`}
      >
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}
