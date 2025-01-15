"use client";

import { fakeBarberApi } from "@/app/(home)/fake-api";
import { useParams } from "next/navigation";
import BookingForm from "../_components/BookingForm";

const BookService = () => {
  const params = useParams();
  const id = params?.id;

  const item = fakeBarberApi.find((api) => api.id === id);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center flex-col w-full bg-white text-black">
      <BookingForm
        location={item.location}
        timeEnd={item.timeEnd}
        timeOpen={item.timeOpen}
        title={item.title}
      />
    </div>
  );
};

export default BookService;
