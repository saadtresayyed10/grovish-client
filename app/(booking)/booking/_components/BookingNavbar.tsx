import Link from "next/link";
import BookingMenubar from "./BookingMenubar";

const BookingNavbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-10 px-8 py-4 lg:py-6 bg-black dark:bg-black text-white font-roobert">
      <Link href="/">
        <h1 className="font-semibold text-4xl lg:text-6xl">Grovish</h1>
      </Link>
      <BookingMenubar />
    </div>
  );
};

export default BookingNavbar;
