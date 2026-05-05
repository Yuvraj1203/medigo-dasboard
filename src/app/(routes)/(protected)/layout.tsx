import { CustomSidebar } from "@/components/template";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutTypes } from "@/types";

const ProtectedLayout = ({ children }: LayoutTypes) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <CustomSidebar />
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
