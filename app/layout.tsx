import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple:content_id" content="835599320" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
