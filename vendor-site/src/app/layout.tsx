import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";

export const metadata = {
  title: "Vendor Site",
  description: "Multi-vendor storefront demo",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <ThemeProvider>{children}</ThemeProvider> 
      </body>
    </html>
  );
}
