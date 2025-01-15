"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const BookingMenubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <IconMenu
            className="lg:w-6 w-4 lg:h-6 h-4 stroke-[1] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex text-center flex-col justify-center items-center w-full bg-warning-200 text-black font-absans lg:gap-y-16 gap-y-10 border-black border-r-2"
        >
          <Link href="/" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">01.</span>
              </sup>
              Home
            </h1>
          </Link>
          <Link href="/projects" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">02.</span>
              </sup>
              Projects
            </h1>
          </Link>
          <Link href="/about" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">03.</span>
              </sup>
              About
            </h1>
          </Link>
          <Link href="/location" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">04.</span>
              </sup>
              Location
            </h1>
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default BookingMenubar;
