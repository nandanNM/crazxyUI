import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ComponentsLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container-wrapper">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0 max-w-2xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ComponentsLayout;
