import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
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
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRole = data?.data?.role;

  const role =
    userRole === "admin" ? "admin" : userRole === "driver" ? "driver" : "rider";

  const dataSidebar = {
    navMain: getSidebarItems(role),
  };

  if (isLoading) return <div>Loading sidebar...</div>;

  const handleLogout = async () => {
    try {
      await logout(null).unwrap();
      dispatch(authApi.util.resetApiState());
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
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
      <div className="p-4">
        <Button variant="destructive" className="w-full" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
