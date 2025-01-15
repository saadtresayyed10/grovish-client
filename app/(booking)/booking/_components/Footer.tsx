import {
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhoneCall,
} from "@tabler/icons-react";
import { Globe2 } from "lucide-react";
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
    <div className="flex justify-center items-center flex-col lg:gap-y-8 gap-y-4 bg-white text-black">
      <div className="flex justify-center items-center gap-x-6 lg:gap-x-10">
        <Link href={contact}>
          <IconPhoneCall />
        </Link>
        <Link href={whatsapp}>
          <IconBrandWhatsapp />
        </Link>
        <Link href={mail}>
          <IconBrandGmail />
        </Link>
        <Link href={facebook}>
          <IconBrandFacebook />
        </Link>
        <Link href={instagram}>
          <IconBrandInstagram />
        </Link>
      </div>
      <div className="flex justify-between items-center w-full bg-black text-white font-roobert p-6">
        <h1 className="flex items-center gap-x-2 text-base cursor-pointer">
          <Globe2 className="w-4 h-4" />
          English
        </h1>
        <h1 className="text-muted-foreground text-base capitalize">
          &copy; Powered by <span className="font-bold uppercase">Groven</span>{" "}
          2025
        </h1>
      </div>
    </div>
  );
};

export default Footer;
