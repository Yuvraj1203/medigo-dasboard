import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  return (
    <header className="flex items-center gap-2.5 h-16 border-b border-sidebar-border items-centerpx-4 py-1">
      <SidebarTrigger />
    </header>
  );
};
