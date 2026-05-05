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
} from "@/components/ui/sidebar";

import { Routes } from "@/navigation/routes";
import { AppIcons } from "@/public";
import Link from "next/link";

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
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      {/* Header */}
      <SidebarHeader className="text-lg font-semibold px-4 py-2">
        My App
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}

          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
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
