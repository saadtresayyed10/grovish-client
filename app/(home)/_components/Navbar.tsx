import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Links = [
  {
    name: "How It Works",
    link: "/howitworks",
  },
  {
    name: "Support",
    link: "/support",
  },
  {
    name: "Resources",
    link: "/resources",
  },
  {
    name: "Portfolio",
    link: "/",
  },
];

const HomeNavbar = () => {
  return (
    <div className="lg:flex hidden justify-between items-center lg:px-10 lg:py-6 bg-black dark:bg-black text-white font-roobert">
      <div className="flex items-center gap-x-20">
        <Link href="/">
          <h1 className="font-semibold lg:text-6xl">Grovish</h1>
        </Link>
        <ul className="flex items-center gap-x-6">
          {Links.map((Linky, idx) => (
            <Link key={idx} href={Linky.link}>
              <li className="hover:text-violet-500 duration-300 text-lg">
                {Linky.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1.5 text-base font-medium text-white backdrop-blur-3xl">
          Book for Free
        </span>
      </button>
    </div>
  );
};

const HomeNavbarMobile = () => {
  return (
    <div className="flex lg:hidden justify-between items-center px-8 py-4 bg-black text-white font-roobert">
      <Link href="/">
        <h1 className="font-semibold text-4xl">Grovish</h1>
      </Link>
      <div className="flex items-center gap-x-4">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Book Now
          </span>
        </button>
        <MobileMenu />
      </div>
    </div>
  );
};

export { HomeNavbar, HomeNavbarMobile };
