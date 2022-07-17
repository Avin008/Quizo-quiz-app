import { Outlet } from "react-router";
import { Navbar } from "../../components";
import "./shared-layout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer
        style={{ minWidth: "100px" }}
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={true}
        theme="dark"
      />
    </>
  );
};

export default SharedLayout;
