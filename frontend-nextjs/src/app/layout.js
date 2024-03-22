import { Inter } from "next/font/google";
import { Prvd } from "@/components/Theme/provider"
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreeCareNet",
  description: "Charity is facilitated with FreeCareNet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-neutral-900 h-screen transition-colors duration-700">
        <Prvd>
          {children}
        </Prvd>
      </body>
    </html>
  );
}
