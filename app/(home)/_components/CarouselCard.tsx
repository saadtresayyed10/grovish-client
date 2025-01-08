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
    <div className="p-10">
      <Card className="w-[250px] h-[400px] flex flex-col items-center justify-between">
        <CardContent className="flex flex-col items-center justify-start p-4 font-roobert text-black">
          <p hidden>{id}</p>
          <div className="w-[200px] h-[200px] flex justify-center items-center">
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start justify-between flex-1 mt-4">
            <h1 className="text-xl font-semibold text-center">{title}</h1>
            <h2 className="text-lg font-semibold">{ratings}</h2>
            <h3 className="text-sm font-semibold">{location}</h3>
          </div>
          <div className="w-full flex justify-between items-center mt-4">
            <button className="border border-black px-4 py-1 rounded-full lg:text-xs">
              {tags}
            </button>
            <Link
              href={locationLink}
              className="text-white bg-black rounded-full p-2"
            >
              <Pin className="w-4 h-4 stroke-[1]" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarouselCard;
