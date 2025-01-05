/* React and Context */
import { AppContext } from "@/context/context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Shadcn Comps */
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CircleLoader } from "react-spinners";


/* Main Component */
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { pageLoading, setPageLoading } = useContext(AppContext);

  useEffect(() => {
    setPageLoading(true);
    
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      setPageLoading(false);
    }
  }, []);

  if (pageLoading) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <CircleLoader size={400} />;
      </div>
    );
  }

  return (
    <SidebarProvider className="font-[Helvetica]">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
