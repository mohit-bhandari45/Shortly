import { Bell, Home, Link } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { API, getProfileAPI } from "@/apis/api";

export function AppSidebar({ ...props }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [user, setUser] = useState();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const res = await API.get(getProfileAPI);
    setUser(res.data.dbUser)
  };

  const data = {
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
      {
        title: "Notifications",
        url: "/dashboard/notifications",
        icon: Bell,
        isActive: currentPath === "/dashboard/notifications",
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
