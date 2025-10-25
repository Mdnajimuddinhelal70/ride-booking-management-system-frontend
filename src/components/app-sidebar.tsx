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
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || "RIDER";
  const data = {
    navMain: getSidebarItems(role),
  };

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    navigate("/login", { replace: true });
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>{/* {Logo} */}</SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <button onClick={handleLogout}>Logout</button>
    </Sidebar>
  );
}
