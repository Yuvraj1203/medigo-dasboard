import { CustomSidebar, Header } from "@/components/template";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutTypes } from "@/types";

const ProtectedLayout = ({ children }: LayoutTypes) => {
  return (
    <SidebarProvider className="">
      <div className="flex w-dvw">
        <CustomSidebar />
        <div className="w-full">
          <Header />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
