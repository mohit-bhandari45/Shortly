import { Button } from "@/components/ui/button";
import { Link, Settings2 } from "lucide-react";
import { useState } from "react";
import { navElements } from "@/utils/utils";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black border-b border-white/10 font-[Helvetica]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <Link size={20} className="text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Shortly
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6 mr-6">
              {navElements.map((element, idx) => {
                return (
                  <button
                    key={idx}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {element}
                  </button>
                );
              })}
            </div>
            <RouterLink to={"/login"}>
              <Button className="text-sm bg-black text-white hover:bg-gray-900">
                Log in
              </Button>
            </RouterLink>
            <RouterLink to={"/signup"}>
              <Button className="text-sm bg-white text-black hover:bg-gray-200">
                Start Free
              </Button>
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Settings2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
