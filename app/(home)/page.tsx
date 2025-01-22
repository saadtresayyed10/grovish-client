import AppointmentsText from "./_components/Appointments";
import CarouselComp from "./_components/Carousel";
import FAQ from "./_components/FAQ";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Reviews from "./_components/Reviews";
import SomeText from "./_components/SomeText";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5 bg-black w-full min-h-screen">
      <Hero />
      <AppointmentsText />
      <Features />
      <SomeText />
      <CarouselComp />
      <FAQ />
      <Reviews />
    </div>
  );
};

export default HomePage;
