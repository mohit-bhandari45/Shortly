import { API, deleteAPI, getUrlsAPI } from "@/apis/api";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Copy, ExternalLink, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClimbingBoxLoader } from "react-spinners";
import moment from "moment";

const Url = () => {
  const [longUrl, setLongUrl] = useState("");
  const [urls, setUrls] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllUrls();
  }, []);

  const getAllUrls = async () => {
    const res = await API.get(getUrlsAPI);
    if (res.status == 200) {
      if (res.data.length == 0) {
        toast.success("No Urls found");
      }
      setUrls(res.data);
    } else {
      toast.error(res.data.msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) {
      setError("Please enter a URL");
      return;
    }

    // Mock URL shortening - in real app, this would call your backend
    const newUrl = {
      id: urls.length + 1,
      longUrl,
      shortUrl: `http://short.url/${Math.random().toString(36).substr(2, 6)}`,
      clicks: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setUrls([newUrl, ...urls]);
    setLongUrl("");
  };

  const handleCopy = async (shortenedURL) => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:4000/${shortenedURL}`
      );
      toast.success("Link Copied to Clipboard");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleOpen = async (shortenedURL) => {
    try {
      window.open(`http://localhost:4000/${shortenedURL}`, "_blank");
      getAllUrls()
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDelete = async (id) => {
    setUrls(urls.filter((url) => url._id !== id));
    const res = await API.get(`${deleteAPI}/${id}`);

    if (res.status == 200) {
      toast.success(res.data.msg);
    } else {
      toast.error(res.data.msg);
    }
  };

  const formatDate = (isoDate) => {
    const formattedDate = moment(isoDate).format("MMMM Do YYYY, h:mm:ss A");
    return formattedDate;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Your Shortened URLs</CardTitle>
          <CardDescription>
            Manage and track your shortened URLs
          </CardDescription>
        </CardHeader>
        <CardContent>
          {urls == null || urls.length === 0 ? (
            urls == null ? (
              <div className="w-full h-full justify-center items-center flex">
                <ClimbingBoxLoader />
              </div>
            ) : (
              <div className="w-full h-full justify-center items-center flex">
                <div>No URLs found!</div>
              </div>
            )
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Original URL</TableHead>
                  <TableHead>Short URL</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {urls.map((url) => (
                  <TableRow key={url.id}>
                    <TableCell className="max-w-xs truncate">
                      {url.originalURL}
                    </TableCell>
                    <TableCell>{url.shortURL}</TableCell>
                    <TableCell>{url.clicks}</TableCell>
                    <TableCell>{formatDate(url.createdAt)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleCopy(url.shortURL)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleOpen(url.shortURL)}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDelete(url._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Url;