import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Mail, Phone } from "lucide-react";

import { CircleUserRound } from "lucide-react";

const ProfileCard = () => {
  return (
      <Card>
        <CardHeader>
          <div className="flex justify-center">
          <CircleUserRound size={"100px"} />
          </div>
            <CardDescription className="text-lg text-zinc-600 flex justify-center">
              First Name, Last Name
            </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-blue-50 h-40 w-full p-4">
            <p className="flex text-zinc-500 items-center">
              <Phone size={"16px"} />
              <span className="ml-2">: 6785431267</span>
            </p>
            <p className="flex text-zinc-500 items-center">
              <Mail size={"16px"} />
              <span className="ml-2">: xyz@email.com</span>
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
  );
};

export default ProfileCard;