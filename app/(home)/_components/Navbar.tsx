"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

// const Links = [
//   {
//     name: "How It Works",
//     link: "/howitworks",
//   },
//   {
//     name: "Support",
//     link: "/support",
//   },
//   {
//     name: "Resources",
//     link: "/resources",
//   },
//   {
//     name: "Portfolio",
//     link: "/",
//   },
// ];

const HomeNavbar = () => {
  return (
    <div className="lg:flex hidden justify-between items-center lg:px-10 lg:py-6 bg-black dark:bg-black text-white font-roobert">
      <div className="flex items-center gap-x-20">
        <Link href="/">
          <h1 className="font-semibold lg:text-6xl">Grovish</h1>
        </Link>
        {/* <ul className="flex items-center gap-x-6">
          {Links.map((Linky, idx) => (
            <Link key={idx} href={Linky.link}>
              <li className="hover:text-violet-500 duration-300 text-lg">
                {Linky.name}
              </li>
            </Link>
          ))}
        </ul> */}
        <NavbarMenuLG />
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
        <h1 className="font-semibold text-4xl font-roobert">Grovish</h1>
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

function NavbarMenuLG({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
      className={cn("font-roobert", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-center items-center gap-x-10 font-roobert text-white">
          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="flex flex-col space-y-4 text-sm p-6">
              <HoveredLink href="/about/our-purpose">Our Purpose</HoveredLink>
              <HoveredLink href="/about/founder">Founder</HoveredLink>
              <HoveredLink href="https://blog-nxtribe.vercel.app/">
                Blog
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Support">
            <div className="text-sm grid grid-cols-2 gap-10 p-10">
              <ProductItem
                title="IT & ITES"
                href="/whatweoffer/it"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Innovative tech solutions for seamless growth."
              />
              <ProductItem
                title="Training & Coaching"
                href="/whatweoffer/training"
                src="/whatwedo/coaching.jpg"
                description="Professional growth for individuals and teams."
              />
              <ProductItem
                title="Digital Marketing"
                href="/whatweoffer/digital-marketing"
                src="/whatwedo/digital.jpg"
                description="Innovative campaigns maximizing online brand reach."
              />
              <ProductItem
                title="HR & CHRO"
                href="/whatweoffer/hr"
                src="/whatwedo/hr&chro.jpg"
                description="Strategic HR solutions for workforce transformation."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="How It Works">
            <div className="flex flex-col space-y-4 text-sm p-6">
              <HoveredLink href="/workshop/workshop">Workshops</HoveredLink>
              <HoveredLink href="/workshop/training">Training</HoveredLink>
              <HoveredLink href="/workshop/webinar">Webinar</HoveredLink>
            </div>
          </MenuItem>
          <Link href="/media" className="text-white">
            Portfolio
          </Link>
        </div>
      </Menu>
    </motion.div>
  );
}

export { HomeNavbar, HomeNavbarMobile };
