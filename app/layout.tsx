import { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

interface LayoutProps {
   children:ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
    <body>
      <Navbar />
          {children}     
      </body>
    </html>
  );
}
