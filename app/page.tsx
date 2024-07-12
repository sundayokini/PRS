import Image from "next/image";
import NavBar from "./ui/navbar/NavBar";
import Hero from "./ui/home-page/Hero";
import Link from "next/link";
import Features from "./ui/home-page/Features";
import SignIn from "./ui/sign-in";

export default function Home() {
  return (
        <main>
          {/* Hero Section */}
          <Hero />

          <div className="font-bold hover:text-blue-500 hover:bg-white px-4 py-4 md:mx-6 lg:mx-8 xl:mx-16 w-fit bg-blue-500 text-white rounded-md">
          <SignIn />
          </div>
          {/* Features */}
          <Features />
          

        </main>
  );
}
