import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../../components/ui/button";
import ProfileUnitCard from "../../components/profile/ProfileUnitCard";
import SideNavbar from "../../components/shared/SideNavbar";
import ProfileCard from "../../components/profile/ProfileCard";
import logo1 from "../../assets/logo1.png";
import { Separator } from "../../components/ui/separator"

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNavbar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <img width={80} height={30}src={logo1} alt="logo"/> 
        
          <div className="ml-auto flex items-center gap-2">
        
            <DropdownMenu>
            
              <DropdownMenuTrigger>
                <div>
                  <Button
                    variant="outline"
                    size="icon"
                    className=" overflow-hidden rounded-full"
                  >
                    <CircleUserRound
                      width={40}
                      height={40}
                      className="overflow-hidden rounded-full"
                    />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to={"/"}>Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <Separator />

      </div>
      <h1 className="ml-20 text-3xl font-semibold text-zinc-600">Welcome to your profile</h1>
      <br/>
      <div className="p-4 sm:ml-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <ProfileCard />
          <div className="col-span-2">
            <ProfileUnitCard />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProfilePage;
