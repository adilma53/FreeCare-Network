// import { Inter } from "next/font/google";
import { Prvd } from "@/components/Theme/provider";
import { Header } from "@/components/Header/main_header";
import { Footer } from "@/components/Footer/main_footer";
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
          <Header />
          {children}
          <Footer />
        </Prvd>
      </body>
    </html>
  );
}
