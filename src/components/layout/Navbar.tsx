import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import projectLogo from "../../assets/icons/image.png";
import { ModeToggle } from "./mode-toggle";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/feature", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const me = data?.data;

  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();

      dispatch(authApi.util.resetApiState());
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="border-b px-4 md:px-6 sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group md:hidden"
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                <svg
                  className="pointer-events-none"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="w-48 p-1 md:hidden">
              <NavigationMenu className="max-w-none">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className="block w-full py-2 px-3 rounded hover:bg-muted"
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-6">
            <h3 className="text-blue-800 font-bold flex items-center">
              <img
                src={projectLogo}
                alt="Logo"
                className="h-6 w-6 object-contain mr-2"
              />
              <Link to="/">
                <span className="text-sm md:text-2xl">
                  Ride Booking Management System
                </span>
              </Link>
            </h3>

            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-2 items-center">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          ) : me ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-sm"
              disabled={logoutLoading}
            >
              Logout
            </Button>
          ) : (
            <Button asChild className="text-sm">
              <Link to="/login">Login</Link>
            </Button>
          )}

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
