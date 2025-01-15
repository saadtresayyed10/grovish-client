"use client";

import { fakeBarberApi } from "@/app/(home)/fake-api";
import { useParams } from "next/navigation";
import BookingForm from "../_components/BookingForm";
import About from "../_components/About";
import Footer from "../_components/Footer";

const BookService = () => {
  const params = useParams();
  const id = params?.id;

  const item = fakeBarberApi.find((api) => api.id === id);

  if (!item) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-white text-black lg:p-20 p-10">
        <h1 className="font-roobert lg:text-8xl text-6xl text-center font-bold uppercase">
          404 :&#40;
          <br />
          <br />
          Seems like that ID doesn&apos;t exist in our database.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col w-full bg-white text-black">
      <BookingForm
        location={item.location}
        timeEnd={item.timeEnd}
        timeOpen={item.timeOpen}
        title={item.title}
      />
      <About mapLocation={item.mapLocation} />
      <div className="mt-10 lg:mt-20" />
      <Footer
        contact={item.contact}
        facebook={item.facebook}
        instagram={item.instagram}
        mail={item.mail}
        whatsapp={item.whatsapp}
      />
    </div>
  );
};

export default BookService;
