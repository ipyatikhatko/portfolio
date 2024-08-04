import About from "@/components/overview/about";
import FullStory from "@/components/overview/full-story";
import Hero from "@/components/overview/hero";

export default function Home() {
  
  return (
    <main> 
      <Hero/>
      <About/>
      <FullStory/>
      {/* <section>
        <h1>Main tech skills</h1>
      </section>
      <section>
        <h1>Detailed spoiler list of tech skills with search</h1>
      </section>
      <section>
        <h1>Other skills by categories</h1>
      </section>
      <section>
        <h1>Showcase</h1>
      </section> */}
    </main>
  );
}
