import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { fakeReviewsApi } from "../fake-api";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="flex justify-start items-start flex-col gap-y-4 w-full lg:px-16 px-4 lg:mb-28 mb-24">
      <h1 className="lg:text-6xl text-4xl text-white font-semibold font-roobert mt-10">
        Reviews
      </h1>
      <Carousel className="w-full max-w-xs lg:max-w-4xl mb-10">
        <CarouselContent className="flex lg:gap-10 gap-3">
          {fakeReviewsApi.map((api) => (
            <CarouselItem
              key={api.id}
              className="flex-shrink-0 w-1 lg:w-1/3 lg:basis-1/3"
            >
              <ReviewCard
                date={api.createdAt}
                name={api.name}
                ratings={api.ratings}
                review={api.review}
              />
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
