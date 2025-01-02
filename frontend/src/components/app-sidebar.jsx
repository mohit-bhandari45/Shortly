import { Home, Link } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";

export function AppSidebar({ ...props }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const data = {
    user: {
      name: "Mohit",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Home",
        url: "/dashboard",
        icon: Home,
        isActive: currentPath === "/dashboard",
      },
      {
        title: "URLS",
        url: "/dashboard/urls",
        icon: Link,
        isActive: currentPath === "/dashboard/urls",
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
