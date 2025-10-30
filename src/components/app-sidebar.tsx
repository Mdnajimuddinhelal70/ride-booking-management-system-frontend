import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";

import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar";

export function AppSidebar({ ...props }) {
  const { data, isLoading } = useUserInfoQuery(null);
  const userRole = data?.data?.role;

  const role =
    userRole === "admin" ? "admin" : userRole === "driver" ? "driver" : "rider";

  const dataSidebar = {
    navMain: getSidebarItems(role),
  };

  if (isLoading) return <div>Loading sidebar...</div>;

  return (
    <Sidebar {...props}>
      <SidebarHeader />
      <SidebarContent>
        {dataSidebar.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((menu) => (
                  <SidebarMenuItem key={menu.title}>
                    <SidebarMenuButton asChild>
                      <Link to={menu.url}>{menu.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
