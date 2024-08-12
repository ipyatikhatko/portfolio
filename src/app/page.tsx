import About from "@/components/overview/about";
import FullStory from "@/components/overview/full-story";
import Hero from "@/components/overview/hero";
import Scene from "@/components/overview/3d/scene";

export default function Home() {
  
  return (
    <main> 
      <Scene/>
      <Hero/>
      <About/>
      <FullStory/>
    </main>
  );
}
