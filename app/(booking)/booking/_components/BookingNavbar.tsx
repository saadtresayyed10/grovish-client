import Link from "next/link";
import BookingMenubar from "./BookingMenubar";

const BookingNavbar = () => {
  return (
    <div className="lg:flex hidden justify-between items-center lg:px-10 lg:py-6 bg-black dark:bg-black text-white font-roobert">
      <Link href="/">
        <h1 className="font-semibold lg:text-6xl">Grovish</h1>
      </Link>
      <BookingMenubar />
    </div>
  );
};

export default BookingNavbar;
