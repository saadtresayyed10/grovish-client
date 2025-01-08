import AppointmentsText from "./_components/Appointments";
import Hero from "./_components/Hero";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-6 bg-black w-full min-h-screen">
      <Hero />
      <AppointmentsText />
    </div>
  );
};

export default HomePage;
