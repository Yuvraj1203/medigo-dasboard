import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppIcons } from "@/public";

export const Header = () => {
  return (
    <header className="flex items-center gap-2.5 h-16 border-b border-sidebar-border px-4 py-1">
      <SidebarTrigger className="h-9 w-9 rounded-md" />
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <AppIcons.Search />
        </InputGroupAddon>
      </InputGroup>
    </header>
  );
};
