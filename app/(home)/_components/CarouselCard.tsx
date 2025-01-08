"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { Scissors } from "lucide-react";

export function CarouselCard() {
  return (
    <div className="max-w-xs mx-auto">
      <BackgroundGradient className="rounded-[16px] sm:p-6 p-3 bg-zinc-900 font-roobert">
        <div className="overflow-hidden rounded-t-[16px]">
          <Image
            src="/images/barbershop-api/guts.jpg"
            alt="jordans"
            height="400"
            width="400"
            className="w-full object-contain rounded-lg"
          />
        </div>
        <div className="p-4">
          <p className="text-base sm:text-lg mt-4 mb-2 text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Barbershop</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0.5 text-white">
              <Scissors className="w-3 h-3" />
            </span>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
