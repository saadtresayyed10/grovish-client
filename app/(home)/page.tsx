import AppointmentsText from "./_components/Appointments";
import CarouselComp from "./_components/Carousel";
import Hero from "./_components/Hero";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5 bg-black w-full min-h-screen">
      <Hero />
      <AppointmentsText />
      <CarouselComp />
    </div>
  );
};

export default HomePage;
