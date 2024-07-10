import Image from "next/image";
import NavBar from "./ui/navbar/NavBar";
import Hero from "./ui/Hero";
import Link from "next/link";
import Features from "./ui/home-page/Features";

export default function Home() {
  return (
        <main>
          {/* Hero Section */}
          <Hero />
          {/* Features */}
          <Features />
          

        </main>
  );
}
