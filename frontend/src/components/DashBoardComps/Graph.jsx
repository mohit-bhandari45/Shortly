/* eslint-disable react/prop-types */
import { format, parseISO } from "date-fns";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Graph = ({ urls }) => { 
  const acc = {};

  const groupByDate = (urls) => {
    if (urls) {
      urls.map((url) => {
        url.clicks.map((count) => {
          const date = format(parseISO(count.createdAt), "yyyy-MM-dd");
          acc[date] = (acc[date] || 0) + 1;
        });
      });
    }
    return acc;
  };

  const groupedData = groupByDate(urls);
  const result = Object.entries(groupedData).map(([date, clicks]) => ({
    date,
    clicks,
  }));

  return (
    <div className="gap-4 mb-8 px-10">
      <Card className="mb-8">
        <CardContent>
          <div className="h-[400px] w-full">
            <CardHeader>
              <CardTitle>Click Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={result}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="clicks" stroke="#000000" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Graph;
