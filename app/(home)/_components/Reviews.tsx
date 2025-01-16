import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { fakeBarberApi } from "../fake-api";

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
              <h1>Hello</h1>
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
