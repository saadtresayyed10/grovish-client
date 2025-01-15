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
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex text-center flex-col justify-center items-center w-full bg-black text-white font-roobert gap-y-16 border-black border-r-2"
        >
          <Link href="/" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">01.</span>
              </sup>
              Home
            </h1>
          </Link>
          <Link href="#book" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">02.</span>
              </sup>
              Book
            </h1>
          </Link>
          <Link href="#" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">03.</span>
              </sup>
              Map
            </h1>
          </Link>
          <Link href="#" onClick={closeSheet}>
            <h1 className="text-4xl font-semibold">
              <sup>
                <span className="font-medium text-xl mr-2">04.</span>
              </sup>
              Call
            </h1>
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default BookingMenubar;
