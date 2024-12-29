import Feature from "@/components/LandingPageComps/Feature";
import Hero from "@/components/LandingPageComps/Hero";
import Navbar from "@/components/LandingPageComps/Navbar";
import Stats from "@/components/LandingPageComps/Stats";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-24 font-[Helvetica]">
        <Hero />
        <Feature />
        <Stats />
      </main>
    </div>
  );
};

export default LandingPage;
