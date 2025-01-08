import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComp = () => {
  return (
    <div className="flex justify-start items-start w-full lg:px-16 px-12">
      <Carousel className="w-full max-w-xs lg:max-w-4xl my-10">
        <CarouselContent className="flex lg:gap-6 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-1/2 lg:w-1/3 basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComp;
