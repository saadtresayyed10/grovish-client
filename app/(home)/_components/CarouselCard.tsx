import { Card, CardContent } from "@/components/ui/card";
import { Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CarouselProps {
  id: number;
  image: string;
  title: string;
  ratings: string;
  location: string;
  tags: string;
  locationLink: string;
}

const CarouselCard = ({
  id,
  image,
  location,
  locationLink,
  ratings,
  tags,
  title,
}: CarouselProps) => {
  return (
    <div className="p-1">
      <Card>
        <CardContent className="flex flex-col aspect-square items-center justify-center p-6 font-roobert text-black">
          <p hidden>{id}</p>
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-full object-cover rounded-lg"
          />
          <div className="flex justify-start items-start flex-col gap-y-4">
            <h1 className="lg:text-2xl font-semibold">{title}</h1>
            <h2 className="lg:text-lg font-semibold">{ratings}</h2>
            <h3 className="lg:text-sm font-semibold">{location}</h3>
          </div>
          <div className="w-full flex justify-between items-center">
            <button className="border border-black px-4 py-1 rounded-full">
              {tags}
            </button>
            <Link href={locationLink}>
              <Pin className="w-2 h-2 stroke-[1]" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarouselCard;
