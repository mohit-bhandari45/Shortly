import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Globe, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-xs font-medium">New</span>
              <span className="text-xs text-gray-400">
                Custom branded domains
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Short links with</span>
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              superpower
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            Create, track, and optimize your links with our powerful platform.
            Transform long URLs into memorable, shareable links instantly.
          </p>

          <div className="flex flex-col justify-center items-center sm:flex-row gap-3">
            <Button className="h-12 px-8 bg-white text-black hover:bg-gray-200 transition-color">
              <Zap className="w-4 h-4 mr-2" />
              Shorten Now
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              No registration required
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Custom domains
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              SSL secured
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
