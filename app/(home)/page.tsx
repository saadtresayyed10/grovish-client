import AppointmentsText from "./_components/Appointments";
import CarouselComp from "./_components/Carousel";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Reviews from "./_components/Reviews";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5 bg-black w-full min-h-screen">
      <Hero />
      <AppointmentsText />
      <Features />
      <CarouselComp />
      <Reviews />
    </div>
  );
};

export default HomePage;
