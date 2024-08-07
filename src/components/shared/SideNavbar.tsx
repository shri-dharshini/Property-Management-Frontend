import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Building,
  Handshake,
  Home,
  MessageSquareDot,
  ShoppingBag,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const role = localStorage.getItem("role")
  const location = useLocation()
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/"}
                className={`${location.pathname==="/"?"group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base":"flex h-9 w-9 items-center bg-white justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"}`}
              >
                   <Home className="h-6 w-6" />
                   <span className="sr-only">Home</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Home</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/properties"}
                className={`${location.pathname.startsWith("/properties")?"group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base":"flex h-9 w-9 items-center bg-white justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"}`}
              >
                     <Building className="h-6 w-6" />
                     <span className="sr-only">Properties</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Properties</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/requests"}
                className={`${location.pathname==="/requests"?"group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base":"flex h-9 w-9 items-center bg-white justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"}`}
              >
                <MessageSquareDot className="h-6 w-6" />
                <span className="sr-only">Requests</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Requests</TooltipContent>
          </Tooltip>
          
          {role==="OWNER"?
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/agreements"}
                className={`${location.pathname==="/agreements"?"group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base":"flex h-9 w-9 items-center bg-white justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"}`}
              >
                <Handshake className="h-6 w-6" />
                <span className="sr-only">Agreements</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Agreements</TooltipContent>
          </Tooltip>:<></>}

          {role==="BUYER"?
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to={"/buyerproperties"}
                className={`${location.pathname==="/buyerproperties"?"group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base":"flex h-9 w-9 items-center bg-white justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"}`}
              >
                <ShoppingBag className="h-6 w-6" />
                <span className="sr-only">Bought Properties</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Bought Properties</TooltipContent>
          </Tooltip>:<></>}
        </TooltipProvider>


      </nav>
    </aside>
  );
};

export default SideNavbar;
