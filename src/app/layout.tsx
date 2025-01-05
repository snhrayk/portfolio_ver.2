"use client";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "ress";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/png" href="img/favicon.png" />
        <title>Sunahara Ayaka&apos;s Portfolio</title>
      </head>
      <body>
        {children}
        <Nav />
        <Footer />
      </body>
    </html>
  );
}
