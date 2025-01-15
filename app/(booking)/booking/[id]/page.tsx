"use client";

import { fakeBarberApi } from "@/app/(home)/fake-api";
import { useParams } from "next/navigation";

const BookService = () => {
  const params = useParams();
  const id = params?.id;

  const item = fakeBarberApi.find((api) => api.id === id);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {item.title}
      <br /> {item.location}
    </div>
  );
};

export default BookService;
