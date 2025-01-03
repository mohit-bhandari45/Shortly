import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

const Cards = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Links</p>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <Link className="w-8 h-8 text-gray-600" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Cards;
