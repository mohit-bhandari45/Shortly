import { features } from "@/utils/utils";
import { Card, CardContent } from "../ui/card";

const Feature = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          return (
            <Card
              key={idx}
              className="group bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
