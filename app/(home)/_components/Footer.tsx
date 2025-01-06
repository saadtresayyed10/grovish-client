import { ArrowUpRight, Globe2 } from "lucide-react";
import Link from "next/link";

const aboutFooter = [
  {
    name: "Customer Support",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Sitemap",
    href: "/",
  },
];

const legal = [
  {
    name: "Privacy Policy",
    href: "/",
  },
  {
    name: "Terms of Service",
    href: "/",
  },
  {
    name: "Terms of Use",
    href: "/",
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "/",
  },
  {
    name: "Instagram",
    href: "/",
  },
  {
    name: "Twitter",
    href: "/",
  },
];

const Footer = () => {
  return (
    <div className="lg:flex hidden justify-center items-center flex-col w-full">
      <div className="flex justify-between items-center bg-gradient-to-tr from-violet-300 to-white text-black font-roobert w-full py-16 px-6">
        <div className="flex justify-center items-center flex-col gap-y-4">
          <h1 className="text-6xl font-bold capitalize">Grovish</h1>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-0.5 text-sm font-medium text-white backdrop-blur-3xl">
              Start Now
            </span>
          </button>
        </div>
        <div className="flex justify-center items-center gap-x-28 mr-52">
          <AboutFooter />
          <Legal />
          <Social />
        </div>
      </div>
      <div className="flex justify-between items-center w-full bg-black text-white font-roobert p-6">
        <h1 className="flex items-center gap-x-2 text-base">
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

const AboutFooter = () => {
  return (
    <ul className="flex justify-start items-start flex-col gap-y-2">
      <li className="font-bold text-xl mb-2">About Grovish</li>
      {aboutFooter.map((tag, idx) => (
        <Link href={tag.href} key={idx}>
          <li className="hover:underline hover:underline-offset-2">
            {tag.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

const Legal = () => {
  return (
    <ul className="flex justify-start items-start flex-col gap-y-2">
      <li className="font-bold text-xl mb-2">Legal</li>
      {legal.map((tag, idx) => (
        <Link href={tag.href} key={idx}>
          <li className="hover:underline hover:underline-offset-2">
            {tag.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

const Social = () => {
  return (
    <ul className="flex justify-start items-start flex-col gap-y-2">
      <li className="font-bold text-xl mb-2">Socials</li>
      {socials.map((tag, idx) => (
        <Link
          className="flex items-center justify-center gap-x-2"
          href={tag.href}
          key={idx}
        >
          <li className="hover:underline hover:underline-offset-2">
            {tag.name}
          </li>
          <ArrowUpRight className="stroke-[1.5]" />
        </Link>
      ))}
    </ul>
  );
};

export default Footer;
