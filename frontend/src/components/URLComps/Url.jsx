import {
    Alert,
    AlertDescription,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Copy, ExternalLink, Trash2 } from 'lucide-react';
import { useState } from 'react';

const Url = () => {
  const [longUrl, setLongUrl] = useState('');
  const [urls, setUrls] = useState([
    { 
      id: 1,
      longUrl: 'https://example.com/very/long/url/that/needs/shortening',
      shortUrl: 'http://short.url/abc123',
      clicks: 145,
      createdAt: '2024-01-01'
    }
  ]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) {
      setError('Please enter a URL');
      return;
    }
    
    // Mock URL shortening - in real app, this would call your backend
    const newUrl = {
      id: urls.length + 1,
      longUrl,
      shortUrl: `http://short.url/${Math.random().toString(36).substr(2, 6)}`,
      clicks: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setUrls([newUrl, ...urls]);
    setLongUrl('');
    setSuccess('URL shortened successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSuccess('Copied to clipboard!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const deleteUrl = (id) => {
    setUrls(urls.filter(url => url.id !== id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Your Shortened URLs</CardTitle>
          <CardDescription>Manage and track your shortened URLs</CardDescription>
        </CardHeader>
        <CardContent>
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
                    {url.longUrl}
                  </TableCell>
                  <TableCell>{url.shortUrl}</TableCell>
                  <TableCell>{url.clicks}</TableCell>
                  <TableCell>{url.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => copyToClipboard(url.shortUrl)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open(url.shortUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => deleteUrl(url.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Url;