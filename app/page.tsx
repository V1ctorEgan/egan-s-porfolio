import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import FeaturedProject from "@/components/FeaturedProject";
import SelectedWorks from "@/components/SelectedWorks";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Stats />
      <TechStack />
      <FeaturedProject />
      {/* <SelectedWorks /> */}
      {/* We will add the Stats and Tech Stack sections next */}
    </main>
  );
}
