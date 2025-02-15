import { FlipWords } from "@/components/ui/flip-words";

const words = ["307", "308", "312", "317", "320", "324", "323", "327"];

const AppointmentsText = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full bg-black mb-16">
      <div className="flex justify-center items-center">
        <p className="text-violet-500 text-center font-roobert text-2xl">
          1, 28,
        </p>
        <FlipWords
          words={words}
          duration={200}
          className="text-violet-500 text-center font-roobert text-2xl"
        />
      </div>
      <p className="text-violet-500 text-center font-roobert text-xl">
        Total Appointments booked today
      </p>
    </div>
  );
};

export default AppointmentsText;
