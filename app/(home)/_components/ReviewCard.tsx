import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ReviewCardProps {}

const ReviewCard = () => {
  return (
    <Card className="bg-gradient-to-tr from-white to-violet-300 text-black px-6 font-roobert">
      <div className=" flex justify-start items-start flex-col gap-y-1">
        <CardHeader className="font-bold lg:text-2xl">Name</CardHeader>
        <CardContent className="lg:w-[92%]">
          <CardDescription className="text-black lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            deleniti.
          </CardDescription>
        </CardContent>
      </div>
      <CardFooter className="flex justify-start flex-col items-start lg:text-sm text-black">
        <p>Date: 12/12/12</p>
        <p>Ratings: 5</p>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
