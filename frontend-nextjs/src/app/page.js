// import Image from "next/image";
// components
import { Hello } from "@/components/Body/hello";
import { Footer } from "@/components/Footer/main_footer";
import { Header } from "@/components/Header/main_header";
import { Switcher } from "@/components/Theme/Switcher";

export default function Home() {
  return (
    <>
      <Header />
      <Hello />
      <Switcher />
      <Footer />
    </>
  );
}
