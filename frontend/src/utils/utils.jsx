import { BarChart3, Link, Shield } from "lucide-react";

const navElements = ["Features", "Solutions", "Pricing", "Enterprise"];

const features = [
  {
    icon: <Link className="w-6 h-6" />,
    title: "Link Management",
    description:
      "Organize, track and manage all of your links in one place with our powerful dashboard.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Detailed Analytics",
    description:
      "Get detailed insights about who's clicking your links, when, and where they're coming from.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "Advanced security features to protect your brand and maintain link integrity.",
  },
];

const stats = [
  { number: "98M+", label: "Links shortened" },
  { number: "150K+", label: "Active users" },
  { number: "99.9%", label: "Uptime guaranteed" },
  { number: "5B+", label: "Monthly clicks" },
];

export { navElements, features, stats };
