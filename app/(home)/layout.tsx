import Footer from "./_components/Footer";
import { HomeNavbar, HomeNavbarMobile } from "./_components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-full sticky top-0 z-50">
        <HomeNavbar />
        <HomeNavbarMobile />
      </header>
      <main>{children}</main>
      <footer className="w-full">
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
