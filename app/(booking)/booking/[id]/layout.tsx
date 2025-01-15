const BookingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default BookingLayout;
