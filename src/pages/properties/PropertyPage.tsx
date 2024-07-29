import { CircleUserRound, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { AddProperty } from "../../components/properties/AddPropertyDialog";
import PropertyCard from "../../components/properties/PropertyCard";
import SideNavbar from "../../components/shared/SideNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { PropertySchema } from "../../types/schema";
import logo from "../../assets/logo.png";

import { Separator } from "../../components/ui/separator";
import { Input } from "../../components/ui/input";
const PropertyPage = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [refresh, setRefresh] = useState(false);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/properties/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error("Please try again later");
        } else {
          console.log(err);
        }
      }); // eslint-disable-next-line
  }, [refresh]);

  const [filterType, setFilterType] = useState<"city" | "state">("city");
  const [search, setSearch] = useState<string>("");
  const filteredProperties = properties.filter((property: PropertySchema) =>
    filterType === "city"
      ? property.city.toLowerCase().includes(search.toLowerCase())
      : property.state.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNavbar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <img width={90} height={30} src={logo} alt="logo" />

          <div className="ml-auto flex items-center gap-4">
            <div className="search-bar-container grid grid-cols-3 gap-3">
              <div className="">
              <Select
                value={filterType}
                onValueChange={setFilterType as (value: string) => void}
                >
                <SelectTrigger className="btn">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="state">State</SelectItem>
                </SelectContent>
              </Select>
              
              </div>
              
              <Input type='text' value={search} className="w-60 col-span-2"
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search by ${filterType}`}></Input>
              
            </div>
            {role === "OWNER" && (
              <AddProperty refresh={refresh} setRefresh={setRefresh} />
            )}

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant={"secondary"}
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <CircleUserRound
                    width={36}
                    height={36}
                    className=" overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-lg mr-7  bg-white border border-zinc-500">
                <DropdownMenuItem className="rounded-lg p-3 text-black justify-right ">
                  <Link className="font-semibold" to="/profile">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <Separator className="bg-zinc-500" />
                <DropdownMenuItem className="rounded-lg  p-3 text-black flex justify-right">
                  <Link className="font-semibold" to={"/"}>
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <Separator />
      </div>

      <div className="p-4 sm:ml-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {filteredProperties.map((property: PropertySchema) => (
            <PropertyCard key={property.id} property={property} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
