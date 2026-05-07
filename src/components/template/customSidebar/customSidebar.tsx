"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { Routes } from "@/navigation/routes";
import { AppIcons } from "@/public";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    url: Routes.protected.dashboard.path,
    icon: AppIcons.LayoutDashboard,
  },
  {
    title: "Orders",
    url: Routes.protected.orders.path,
    icon: AppIcons.ShoppingBag,
  },
  {
    title: "Prescription",
    url: Routes.protected.prescriptions.path,
    icon: AppIcons.FileText,
  },
  {
    title: "Products",
    url: Routes.protected.products.path,
    icon: AppIcons.Package,
  },
  {
    title: "Inventory",
    url: Routes.protected.inventory.path,
    icon: AppIcons.Boxes,
  },
  {
    title: "Riders",
    url: Routes.protected.riders.path,
    icon: AppIcons.Truck,
  },
  {
    title: "Users",
    url: Routes.protected.users.path,
    icon: AppIcons.Users,
  },
  {
    title: "Analytics",
    url: Routes.protected.analytics.path,
    icon: AppIcons.ChartColumn,
  },
  {
    title: "Settings",
    url: Routes.protected.settings.path,
    icon: AppIcons.Settings,
  },
];

export function CustomSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      {/* Header */}
      <SidebarHeader className="flex-row gap-2.5 h-16 border-b border-sidebar-border items-center text-lg font-semibold px-4 py-1">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
          <AppIcons.Cross size={20} />
        </span>
        <div className="flex flex-col justify-between overflow-hidden">
          <div className="text-sm font-semibold leading-tight text-nowrap">
            MediGo
          </div>
          <div className="text-[11px] text-muted-foreground leading-tight text-nowrap">
            Quick Pharmacy Ops
          </div>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}

          <SidebarMenu className="gap-2">
            {menuItems.map((item) => (
              <SidebarMenuItem
                className="duration-250 hover:scale-110"
                key={item.title}
              >
                <SidebarMenuButton
                  className={`${
                    pathname.startsWith(item.url)
                      ? "bg-sidebar-accent hover:text-sidebar-accent-foreground border-l-2"
                      : "border-l-2 border-sidebar-accent"
                  } duration-250`}
                  asChild
                >
                  <Link href={item.url}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 text-sm text-muted-foreground">
        © 2026 My App
      </SidebarFooter>
    </Sidebar>
  );
}
