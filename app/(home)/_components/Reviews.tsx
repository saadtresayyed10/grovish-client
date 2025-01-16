import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { fakeBarberApi } from "../fake-api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Reviews = () => {
  return (
    <div className="flex justify-start items-start flex-col gap-y-4 w-full lg:px-16 px-4">
      <h1 className="lg:text-4xl text-3xl text-white font-semibold font-roobert mt-10">
        Reviews
      </h1>
      <Carousel className="w-full max-w-xs lg:max-w-4xl mb-10">
        <CarouselContent className="flex lg:gap-10 gap-3">
          {fakeBarberApi.map((api) => (
            <CarouselItem
              key={api.id}
              className="flex-shrink-0 w-1 lg:w-1/3 lg:basis-1/3"
            >
              <Card className="bg-gradient-to-tr from-white to-violet-300 text-black px-6 font-roobert">
                <div className=" flex justify-start items-start flex-col gap-y-1">
                  <CardHeader className="font-bold lg:text-2xl">
                    Name
                  </CardHeader>
                  <CardContent className="lg:w-[92%]">
                    <CardDescription className="text-black lg:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, deleniti.
                    </CardDescription>
                  </CardContent>
                </div>
                <CardFooter className="flex justify-start flex-col items-start lg:text-sm text-black">
                  <p>Date: 12/12/12</p>
                  <p>Ratings: 5</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default Reviews;
