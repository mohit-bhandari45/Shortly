import { Copy, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { addUrlAPI, API } from "@/apis/api";
import toast from "react-hot-toast";

export const Home = () => {
  const [isURLShortened, setIsURLShortened] = useState(false);
  const [shortenedURL, setShortenedURL] = useState("");
  const [url, setUrl] = useState("");

  const handleShortenURL = async () => {
    const res = await API.post(
      addUrlAPI,
      {
        url: url,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status == 201) {
      setShortenedURL(res.data.shortID);
      setIsURLShortened(true);
    } else {
      toast.error(res.data.msg);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:4000/${shortenedURL}`
      );
      toast.success("Link Copied to Clipboard");
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
                <span className="text-black">{`http://localhost:4000/api/get/${shortenedURL}`}</span>
              </div>
              <Button onClick={handleCopy} className="h-12 px-8">
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
