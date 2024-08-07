import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { UnitSchema } from "../../types/schema";
import { Bath, BedDouble, Building2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { UpdateUnit } from "./UpdateUnitDialog";

interface UnitCardProps {
  unit: UnitSchema;
  role: string | null;
  refresh: boolean;
  setRefresh: Function;
}

const UnitCard = ({ unit, role, refresh, setRefresh }: UnitCardProps) => {
  return (
    <div className="rounded bg-gray-50 dark:bg-gray-800">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            
              <CardTitle className="flex space-x-2">
                <span>{unit.name}</span>
                {role === "OWNER" ? (
                  <UpdateUnit
                    refresh={refresh}
                    setRefresh={setRefresh}
                    unit={unit}
                    propertyId={"" + unit.property.id}
                  />
                ) : (
                  <></>
                )}
              </CardTitle>
            
            <Badge variant={"outline"}>{unit.availability}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="h-[40px] overflow-clip">
            {unit.description}
          </CardDescription>
          <br />
          <div className="flex justify-between items-center">
            <p className="col bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-md">
              <Building2 size="15" className="inline mr-2" />
              {unit.squareFootage + " "} sqft.
            </p>
            <p className="col bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-md">
              <BedDouble size="15" className="inline mr-2" />
              {unit.bedrooms + " " + "Bedrooms"}
            </p>
            <p className="col bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-md">
              <Bath size="15" className="inline mr-2" />
              {unit.bathrooms + " " + "Bathrooms"}
            </p>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          {unit.availability === "SOLD_OUT" ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full px-5 col-span-4 text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
                >
                  View Buyer Details
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center pb-2">
                    Buyer Details
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <span className="text-black text-base">
                      Name: {unit.soldTo?.firstName} {unit.soldTo?.lastName}
                    </span>
                  </AlertDialogDescription>
                  <AlertDialogDescription className="text-black text-base">
                    Phone: {unit.soldTo?.phoneNumber}
                  </AlertDialogDescription>
                  <AlertDialogDescription className="text-black text-base">
                    Email: {unit.soldTo?.email}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="w-full">
                    Close
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Link
              to={`/properties/${unit.property.id}/units/${unit.id}`}
              className="block w-full"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full px-5 col-span-4 text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
              >
                View Details
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default UnitCard;
