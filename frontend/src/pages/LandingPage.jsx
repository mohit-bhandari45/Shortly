import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

/* Components */
import Feature from "@/components/LandingPageComps/Feature";
import Hero from "@/components/LandingPageComps/Hero";
import Navbar from "@/components/LandingPageComps/Navbar";
import Stats from "@/components/LandingPageComps/Stats";

/* Context */
import { AppContext } from "@/context/context";
import { useContext } from "react";

/* Component */
const LandingPage = () => {
  const navigate = useNavigate();
  const { pageLoading, setPageLoading } = useContext(AppContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    } else {
      setPageLoading(false);
    }
  }, []);

  if (pageLoading) {
    return <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <CircleLoader size={400}/>;
    </div>
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
