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
              src="/images/scissors.png"
              alt="Logo"
              width={48}
              height={48}
            />
          </DialogTitle>
          <DialogDescription asChild>
            <div className="flex justify-start items-start w-full flex-col lg:gap-y-3">
              <h1 className="text-white lg:text-4xl font-semibold">Grovish</h1>
              <h4 className="text-white lg:text-sm font-light">
                Log in to get started!
              </h4>
            </div>
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="flex justify-start items-start w-full h-min lg:py-4 flex-col lg:gap-y-8">
            <div className="flex justify-start items-start flex-col lg:gap-y-3">
              <Label>
                Email<sup>*</sup>
              </Label>
              <Input type="text" placeholder="franklin@gmail.com" required />
            </div>
            <div className="flex justify-start items-start flex-col lg:gap-y-3">
              <Label>
                Password<sup>*</sup>
              </Label>
              <Input type="password" placeholder="Min. 8 characters" required />
            </div>
            <div className="flex justify-between w-full items-center text-center lg:px-10">
              <p className="text-white cursor-pointer text-xs underline-offset-2 hover:underline duration-300">
                Create An Account
              </p>

              <p className="text-white cursor-pointer text-xs underline-offset-2 hover:underline duration-300">
                Forgot Password?
              </p>
            </div>
          </div>
          <DialogFooter>
            <div className="flex justify-center items-center w-full lg:mt-4">
              <Button
                className="bg-transparent text-white border border-violet-500 rounded-full lg:px-8 lg:py-2"
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
