import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1.5 text-base font-medium text-white backdrop-blur-3xl">
            Book for Free
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-roobert bg-black text-white">
        <DialogHeader>
          <DialogTitle asChild>
            <Image
              src="/features/client-icon.png" //Replace with Scissor icon
              alt="Logo"
              width={42}
              height={42}
            />
          </DialogTitle>
          <DialogDescription asChild>
            <div className="flex justify-start items-start w-full flex-col lg:gap-y-2">
              <h1 className="text-white lg:text-4xl font-semibold">Login</h1>
              <h4 className="text-white lg:text-sm font-light">
                Log in to get started!
              </h4>
            </div>
          </DialogDescription>
        </DialogHeader>
        <form className="flex justify-start items-start w-full h-min lg:py-4 flex-col lg:gap-y-8">
          <div className="flex justify-start items-start flex-col lg:gap-y-3">
            <Label>
              Email<sup>*</sup>
            </Label>
            <Input type="text" placeholder="franklin@gmail.com" />
          </div>
          <div className="flex justify-start items-start flex-col lg:gap-y-3">
            <Label>
              Password<sup>*</sup>
            </Label>
            <Input type="password" placeholder="Min. 8 characters" />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
