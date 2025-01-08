import AppointmentsText from "./_components/Appointments";
import { CarouselCard } from "./_components/CarouselCard";
import Hero from "./_components/Hero";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5 bg-black w-full min-h-screen">
      <Hero />
      <AppointmentsText />
      <div className="flex justify-center items-center lg:mt-4 mt-1">
        <CarouselCard />
      </div>
    </div>
  );
};

export default HomePage;
