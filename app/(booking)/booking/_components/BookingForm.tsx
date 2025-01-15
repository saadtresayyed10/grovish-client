"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  title: string;
  location: string;
  timeOpen: number;
  timeEnd: number;
}

const BookingForm = ({
  location,
  timeEnd,
  timeOpen,
  title,
}: BookingFormProps) => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-10 bg-white text-black w-full lg:p-10 p-8 font-roobert">
      <h1 className="font-medium capitalize lg:text-4xl text-3xl text-center">
        Greetings User, welcome to <span className="font-bold">{title}</span>.
      </h1>
      <BookForm />
      <div className="flex lg:items-center items-start lg:justify-center justify-start lg:flex-row flex-col lg:gap-x-20 gap-y-2">
        <h4 className="lg:text-base text-sm">
          <span className="font-semibold">Address</span>: {location}
        </h4>
        <h4 className="lg:text-base text-sm">
          <span className="font-semibold">Time</span>: {timeOpen}:00 AM -{" "}
          {timeEnd}:00 PM
        </h4>
      </div>
    </div>
  );
};

function BookForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white text-black">
      <h2 className="font-bold lg:text-xl text-2xl text-neutral-800 ">
        Booking Form
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        mollitia.
      </p>

      <form className="my-2" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Saad" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Sayyed" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="grove@en.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="date">Date</Label>
          <Input id="date" placeholder="dd-mm-yy" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="time">Time</Label>
          <Input id="time" placeholder="10:00 AM/PM" type="text" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black   to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] (--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Book Now &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default BookingForm;
