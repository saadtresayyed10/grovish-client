import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeaturesCardProps {
  icon: string;
  name: string;
  header: string;
  description: string;
  image: string;
  link: string;
}

const FeaturesCardLG = ({
  image,
  name,
  icon,
  header,
  description,
  link,
}: FeaturesCardProps) => {
  return (
    <div className="w-full h-min flex justify-center items-center bg-[#F7F7F7] lg:p-6 p-10 rounded-xl shadow-md font-roobert text-black flex-col lg:flex-row gap-y-8">
      <div className="min-w-[50%] flex justify-start items-start flex-col gap-y-10 text-left">
        <div className="flex justify-start items-start flex-col gap-y-2 text-left">
          <Image
            src={icon}
            alt={name}
            width={64}
            height={64}
            className="px-4 py-2 rounded-lg shadow-sm bg-[#FFEBF2]"
          />
          <h3 className="text-[#FF3479] text-xl uppercase font-semibold">
            {name}
          </h3>
        </div>
        <h1 className="font-medium text-4xl capitalize">{header}</h1>
        <h2 className="font-extralight text-2xl capitalize">{description}</h2>
        <Link href={link}>
          <button className="flex items-center gap-x-2 hover:gap-x-4 duration-300 bg-transparent border border-black px-6 py-3 rounded-full text-base uppercase">
            More on {name}
            <ArrowRight className="stroke-[1.5]" />
          </button>
        </Link>
      </div>
      <div className="min-w-[50%] flex justify-end items-end rounded-lg">
        <Image src={image} alt={name} width={420} height={420} />
      </div>
    </div>
  );
};

export { FeaturesCardLG };
