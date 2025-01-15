import BookingNavbar from "../_components/BookingNavbar";

const BookingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="top-0 sticky z-50 w-full">
        <BookingNavbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default BookingLayout;
