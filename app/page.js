import Image from "next/image";
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import Footer from "@/components/Footer";
import Destination from "@/components/Destination";
import Packages from "@/components/Packages";
import HomeAbout from "@/components/HomeAbout";
import HomeDetails from "@/components/HomeDetails";



export default function Home() {
  return (
    <>
      <Header />
      <SearchEngine />
      <Destination />
      <HomeAbout />

      <Packages />


      <HomeDetails />


      {/* <Blog/> */}
      <Footer />

    </>
  );
}
