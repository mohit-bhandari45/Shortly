import { useEffect, useState } from "react";

/* Shadcn Comps */
import { host } from "@/apis/api";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

/* Lucide and toast */
import { Copy, Zap } from "lucide-react";
import toast from "react-hot-toast";

/* normal comps and utils functions */
import Cards from "./Cards";
import Graph from "./Graph";
import { getAllUrlsHandler, shortenURLHandler } from "../utils/utils";

/* Main Comp */
export const Home = () => {
  const [isURLShortened, setIsURLShortened] = useState(false);
  const [shortenedURL, setShortenedURL] = useState("");
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState(null);

  const getAllUrls = async () => {
    const response = await getAllUrlsHandler();
    if (response.status === 200) {
      if (response.data.length == 0) {
        toast.success("No Urls found");
      }
      setUrls(response.data);
    } else {
      toast.error(response.data);
    }
  };

  useEffect(() => {
    getAllUrls();
  }, []);

  const handleShortenURL = async () => {
    const response = await shortenURLHandler(url);

    if (response.status == 201) {
      setShortenedURL(response.data);
      setIsURLShortened(true);
    } else {
      toast.error(response.data);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${host}/${shortenedURL}`);
      toast.success("Link Copied to Clipboard");
      setIsURLShortened(false);
      setUrl("");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div>
      {/* URL Shortener Input */}
      <Card className="max-w-3xl mx-auto bg-white/5 border-white/10 backdrop-blur-sm">
        <CardContent className="p-3 bg-white rounded-xl">
          {!isURLShortened ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                value={url}
                onChange={handleChange}
                placeholder="Paste your long URL here..."
                className="flex-1 h-12 border-white/10 text-black placeholder:text-black"
              />
              <Button
                onClick={handleShortenURL}
                disabled={url.length === 0 ? true : false}
                className="h-12 px-8 bg-white text-black hover:bg-gray-200 transition-colors"
              >
                <Zap className="w-4 h-4 mr-2" />
                Shorten Now
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center px-4 h-12 bg-white/5 rounded-md">
                <span className="text-black">{`${host}/${shortenedURL}`}</span>
              </div>
              <Button onClick={handleCopy} className="h-12 px-8">
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <Cards urls={urls} />
      <Graph urls={urls} />
    </div>
  );
};
