import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { Card, CardContent, CardDescription } from "../../components/ui/card";
import { CircleCheckBig, Copyright } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import logo from "../../assets/logo.png";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.png";

import image3 from "../../assets/image3.jpg";
import { toast } from "sonner";

export const Hero = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");


  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <div className="flex flex-col sm:gap-4 sm:pt-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <img width={90} height={50} src={logo} alt="logo" />

            {token ? (
              <Link to="/profile" className=" ml-auto w-1/12">
                <Button className="w-full">Profile</Button>
              </Link>
            ) : (
              <div className="ml-auto flex items-center gap-4 w-1/5">
                <Link to="/signup" className="w-full">
                  <Button className="w-full">Sign up</Button>
                </Link>
                <Link to="/login" className="w-full">
                  <Button
                    className="w-full text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            )}
        </header>
        <Separator />
      </div>

      <main className="flex-grow">
        <div className="relative h-screen rounded-xl w-11/12 bg-cover Home">
          {/* <p className="text-4xl text-center m-4 font-semibold text-white">Trusted Place To Find A Home For Your Family</p> */}
          <div className="absolute left-10 top-10 text-white space-y-5 w-3/4"
            style={{ animation: "header-animation 1s ease-in-out" }}><h1 className="text-6xl font-bold" style={{ lineHeight: "1.25" }}>
            Trusted Place To Find A Home For Your Family
          </h1>

          <p className="text-2xl">
            Discover a wide range of verified properties tailored to your needs.
          </p>
        </div>
        </div>

        <div className="h-screen">
          <div className="rounded-3xl p-5 flex justify-center">
            <Card className="w-3/4 p-4 pb-0 bg-opacity-10 mb-2">
              <CardContent className="grid grid-cols-2 gap-6 ">
                <CardDescription className="text-black text-xl p-3 pt-6 text-justify flex items-center justify-center ">
                  <p>
                    Discover a wide range of verified rental properties tailored
                    to your needs. Whether you are looking for a cozy apartment
                    or a spacious house, our extensive database ensures you find
                    the perfect home. Navigate our platform with ease. Our
                    intuitive design makes it simple to search, compare, and
                    apply for properties, saving you time and effort.
                  </p>
                </CardDescription>
                <CardDescription className="text-black text-xl p-6 flex items-center justify-center rounded-md">
                  <img src={image2} className="rounded-lg size-fit" />
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-3xl p-4 flex justify-center">
            <Card className="w-3/4 p-4 bg-opacity-10 mb-10">
              <CardContent className="grid grid-cols-2 gap-4 ">
                <CardDescription className="text-black text-xl p-3 text-justify flex items-center justify-center ">
                  <img src={image3} className="rounded-lg size-fit" />
                </CardDescription>
                <CardDescription className="text-black text-xl p-3 pt-6 text-justify flex items-center justify-center ">
                  <ul>
                    <li className="flex items-center space-x-4">
                      <CircleCheckBig color="#25b658" />{" "}
                      <span className="pb-2"> Smart Search Filters</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CircleCheckBig color="#25b658" />{" "}
                      <span className="pb-2"> Role Based Authentication</span>
                    </li>
                    <li className="flex items-center space-x-4 ">
                      <CircleCheckBig color="#25b658" />{" "}
                      <span className="pb-2"> Effortless renting</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CircleCheckBig color="#25b658" />{" "}
                      <span className="pb-2"> Seamless Living</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CircleCheckBig color="#25b658" />{" "}
                      <span className="pb-2"> Rental History tracking</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <br />
        <div className="">
          <div className="rounded-3xl p-5 ml-10 mr-10">
            <h1 className="text-4xl p-8 pt-0 pb-0">Properties for you.</h1>
            <div className="grid grid-cols-2 gap-10 p-8">
              <img src={image1} className="rounded-lg size-fit " />
              <div className="flex flex-row items-center">
                <p className="text-xl text-justify">
                  Our properties are a testament to modern living, featuring a
                  range of amenities to cater to your every need. From luxurious
                  high-rise condos with breathtaking city views to charming
                  villas nestled in serene neighborhoods, each property is
                  meticulously designed to provide the ultimate comfort and
                  style. With state-of-the-art facilities, 24/7 security, and
                  premium locations close to essential services, our properties
                  are not just residences—they're the backdrop to your future
                  memories.
                  {token ? (
                    <Link to="/properties" className="flex justify-center pt-5">
                      <Button
                        className="w-1/4 transform transition duration-500 hover:scale-110 text-blue-500 border-blue-500  hover:text-white hover:bg-blue-500"
                        variant="outline" 
                      >
                        View Properties
                      </Button>
                    </Link>
                  ) : (
                    <Link to={"/login"} className="flex justify-center pt-5">
                      <Button
                        onClick={() => toast("You need to log in.")}
                        className="w-1/4  text-blue-500 border-blue-500  hover:text-white hover:bg-blue-500"
                        variant="outline"
                      >
                        View Properties
                      </Button>
                    </Link>
                  )}
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="py-6 mt-5 text-white flex space-x-2 items-center justify-center bg-blue-500">
          <br />
          <Copyright color="#ffffff" size={"22px"} className="mr-1" />
          <span>All Copyrights reserved - Haven</span>
        </div>
      </main>
    </div>
  );
};