import { Check } from "lucide-react";
import Image from "next/image";

const checks = [
  {
    text: "Take bookings 24/7",
  },
  {
    text: "Keep your calendar full",
  },
  {
    text: "Protect against no-shows",
  },
  {
    text: "Book your service at light-speed",
  },
];

const Hero = () => {
  return (
    <section className="lg:mt-10 flex justify-center items-center lg:flex-row flex-col gap-y-10 w-full p-10 bg-black text-white">
      <div className="flex justify-start items-start lg:w-[50%] w-full flex-col gap-y-8">
        <h1 className="lg:text-6xl text-4xl font-tartuffo tracking-wide uppercase font-bold">
          Discover beauty and wellness near you
        </h1>
        <ul className="flex justify-start items-start flex-col gap-y-2 font-roobert uppercase">
          {checks.map((check, idx) => (
            <li className="flex items-center gap-x-2" key={idx}>
              <Check className="w-4 h-4 stroke-[1]" />
              {check.text}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-x-6 font-roobert lg:mt-4 mt-2">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl lg:text-sm">
              Get Started For Free
            </span>
          </button>
          <p className="lg:text-sm text-xs text-muted-foreground">
            No credit/debit required*
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start lg:w-[50%] w-full">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={480}
          height={480}
        />
      </div>
    </section>
  );
};

export default Hero;
