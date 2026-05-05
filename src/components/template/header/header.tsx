import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  return (
    <header className="flex items-center gap-2.5 h-16 border-b border-sidebar-border px-4 py-1">
      <SidebarTrigger className="h-9 w-9 rounded-md" />
    </header>
  );
};
