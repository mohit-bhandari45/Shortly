import { API, deleteAPI, getUrlsAPI, host } from "@/apis/api";
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
import moment from "moment";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ClimbingBoxLoader } from "react-spinners";

const Url = () => {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    getAllUrls();
  }, []);

  const getAllUrls = async () => {
    const res = await API.get(getUrlsAPI);
    if (res.status == 200) {
      if (res.data.length == 0) {
        toast.success("No Urls found");
        console.log("Mohit");
      }
      setUrls(res.data);
    } else {
      toast.error(res.data.msg);
    }
  };

  const handleCopy = async (shortenedURL) => {
    try {
      await navigator.clipboard.writeText(`${host}/${shortenedURL}`);
      toast.success("Link Copied to Clipboard");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleOpen = async (shortenedURL) => {
    try {
      window.open(`${host}/${shortenedURL}`, "_blank");
      getAllUrls();
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
