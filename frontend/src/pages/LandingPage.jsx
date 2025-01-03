import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

/* Components */
import Feature from "@/components/LandingPageComps/Feature";
import Hero from "@/components/LandingPageComps/Hero";
import Navbar from "@/components/LandingPageComps/Navbar";
import Stats from "@/components/LandingPageComps/Stats";

/* Component */
const LandingPage = () => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    } else {
      setPageLoading(false);
    }
  }, []);

  if (pageLoading) {
    return <ClimbingBoxLoader />;
  }

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
