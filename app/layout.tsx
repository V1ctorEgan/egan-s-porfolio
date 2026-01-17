import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0c10] text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
