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
    <div className="w-full h-min hidden lg:flex justify-center items-center bg-[#F7F7F7] p-6 rounded-xl shadow-md font-roobert text-black">
      <div className="min-w-[50%] flex justify-start items-start flex-col gap-y-10 text-left">
        <div className="flex justify-start items-start flex-col gap-y-4 text-left">
          <Image
            src={icon}
            alt={name}
            width={32}
            height={32}
            className="p-2 rounded-md bg-[#FFEBF2]"
          />
          <h3 className="text-[#FF3479] text-2xl uppercase font-semibold">
            {name}
          </h3>
        </div>
        <h1 className="font-medium text-4xl capitalize">{header}</h1>
        <h2 className="font-light text-3xl capitalize">{description}</h2>
        <Link href={link}>
          <button className="flex items-center gap-x-2 bg-transparent border border-black px-6 py-3 rounded-full text-2xl uppercase">
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
