import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <title>Sunahara Ayaka&apos;s Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
