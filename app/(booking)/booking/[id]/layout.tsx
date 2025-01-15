import BookingNavbar from "../_components/BookingNavbar";

const BookingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <BookingNavbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default BookingLayout;
