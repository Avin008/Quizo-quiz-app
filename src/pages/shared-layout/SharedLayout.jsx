import { Outlet } from "react-router";
import { Navbar } from "../../components";
import "./shared-layout.css";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
