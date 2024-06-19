import type { Metadata } from "next";
import { league_spartan } from "@/ui/fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "GiBot",
  description: "GiBot - Open Source Discord Bot.",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        sizes: "1024x1024",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={league_spartan.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
