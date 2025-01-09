import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, StarHalf, Star as StarOutline } from "lucide-react"; 
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

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={`full-${index}`} className="w-4 h-4 text-violet-500" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 text-violet-500" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <StarOutline key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

const CarouselCard = ({
  id,
  image,
  location,
  locationLink,
  ratings,
  tags,
  title,
}: CarouselProps) => {
  const numericRating = parseFloat(ratings);

  return (
    <div className="p-1">
      <Card className="w-[250px] h-[400px] flex flex-col items-center justify-between">
        <CardContent className="flex flex-col items-start justify-start p-4 font-roobert text-black">
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
            <div className="flex items-center">
              {renderStars(numericRating)}
              <span className="ml-2 text-sm text-gray-600">{ratings}/5</span>
            </div>
            <h3 className="text-sm font-semibold">{location}</h3>
          </div>
          <div className="w-full flex justify-between items-center mt-4">
            <button className="border border-black px-4 py-1 rounded-full text-xs">
              {tags}
            </button>
            <Link
              href={locationLink}
              className="text-white bg-black rounded-full p-2"
            >
              <MapPin className="w-4 h-4 stroke-[1]" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarouselCard;
