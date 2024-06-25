import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Case",
  description: "swiftcase technical challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen `}>
        <NavBar></NavBar>
        <main className="flex-grow overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
