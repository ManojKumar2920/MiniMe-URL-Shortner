import HeroSec from "@/components/Hero/HeroSec";
import NavBar from "@/components/Nav/NavBar";
import ThemeSwitch from "@/components/Theme/ThemeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
        <HeroSec />
      </div>
    </div>
  );
}
