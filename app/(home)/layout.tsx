import { HomeNavbar } from "./_components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <HomeNavbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default HomeLayout;
