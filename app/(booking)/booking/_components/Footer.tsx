import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhoneCall,
} from "@tabler/icons-react";
import { Globe2, Mail } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  facebook: string;
  whatsapp: string;
  contact: string;
  mail: string;
  instagram: string;
}

const Footer = ({
  contact,
  facebook,
  mail,
  whatsapp,
  instagram,
}: FooterProps) => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-2 bg-white text-black">
      <div className="flex justify-center items-center gap-x-6 lg:gap-x-10">
        <Link href={contact}>
          <IconPhoneCall className="w-4.5 h-4.5 stroke-[1.5]" />
        </Link>
        <Link href={whatsapp}>
          <IconBrandWhatsapp className="w-4.5 h-4.5 stroke-[1.5]" />
        </Link>
        <Link href={mail}>
          <Mail className="w-4.5 h-4.5 stroke-[1.5]" />
        </Link>
        <Link href={facebook}>
          <IconBrandFacebook className="w-4.5 h-4.5 stroke-[1.5]" />
        </Link>
        <Link href={instagram}>
          <IconBrandInstagram className="w-4.5 h-4.5 stroke-[1.5]" />
        </Link>
      </div>
      <div className="flex justify-center items-center lg:flex-row flex-col w-full text-black font-roobert p-6 lg:gap-x-[800px] gap-y-2">
        <h1 className="flex items-center gap-x-2 text-base cursor-pointer">
          <Globe2 className="w-4 h-4" />
          English
        </h1>
        <h1 className="text-black text-base capitalize">
          &copy; Powered by <span className="font-bold uppercase">Groven</span>{" "}
          2025
        </h1>
      </div>
    </div>
  );
};

export default Footer;
