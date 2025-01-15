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
    <div className="flex justify-center items-center flex-col lg:gap-y-10 bg-white text-black w-full lg:p-10 font-roobert">
      <h1 className="font-medium capitalize lg:text-4xl text-2xl">
        Greetings User, welcome to <span className="font-bold">{title}</span>.
      </h1>
      <div className="flex items-center justify-center lg:gap-x-20">
        <h4>
          <span className="font-semibold">Address</span>: {location}
        </h4>
        <h4>
          <span className="font-semibold">Time</span>: {timeOpen}:00 AM -{" "}
          {timeEnd}:00 PM
        </h4>
      </div>
    </div>
  );
};

export default BookingForm;
