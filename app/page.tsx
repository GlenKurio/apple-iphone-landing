import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Model from "@/components/model";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}
