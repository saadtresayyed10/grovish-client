"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogIn, Menu, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu
            className="w-6 h-6 stroke-[2] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-black flex text-center flex-col justify-center items-center w-full h-[100%] text-white font-roobert lg:gap-y-16 gap-y-10 text-2xl"
        >
          <Accordion type="single" collapsible className="w-full font-roobert">
            <AccordionItem value="item-1">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="/feature/bookings">Bookings</Link>
                  <Link href="/feature/barbers">Barbers</Link>
                  <Link href="/feature/local-shops">Local Service Centers</Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Support</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="/support/chat">Chat Support</Link>
                  <Link href="/support/call">Call Support</Link>
                  <Link href="/support/ai">AI Support</Link>
                  <Link href="/support/mail">Mail Support</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How It Works</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="/htw/admin">Admin (Service Owners) </Link>
                  <Link href="/htw/customer">Customer</Link>
                  <Link href="/htw/relationships">Relationships</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>About</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="/">Who are We?</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <div className="flex justify-center items-center gap-x-8">
              <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1.5 text-base font-medium text-white backdrop-blur-3xl">
                  Register <User2 className="ml-2" />
                </span>
              </button>
              <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1.5 text-base font-medium text-white backdrop-blur-3xl">
                  Login <LogIn className="ml-2" />
                </span>
              </button>
            </div>
          </Accordion>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
