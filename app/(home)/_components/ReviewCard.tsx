import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  review: string;
  date: string;
  ratings: number;
}

const ReviewCard = ({ date, name, ratings, review }: ReviewCardProps) => {
  return (
    <Card className="bg-gradient-to-tr from-white to-violet-300 text-black px-6 font-roobert">
      <div className=" flex justify-start items-start flex-col gap-y-1">
        <CardHeader className="font-bold lg:text-2xl">{name}</CardHeader>
        <CardContent className="lg:w-[92%]">
          <CardDescription className="text-black lg:text-base">
            {review}
          </CardDescription>
        </CardContent>
      </div>
      <CardFooter className="flex justify-start flex-col items-start lg:text-sm text-black">
        <p>Date: {date}</p>
        <p>Ratings: {ratings}</p>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
