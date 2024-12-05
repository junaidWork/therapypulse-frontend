import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Support from "../components/support/Support";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Support />
      <Outlet />
    </>
  );
};

export default Layout;
