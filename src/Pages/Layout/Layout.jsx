import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <main className="w-full h-screen p-5 flex gap-x-3">
        <section className="w-8/12  h-full relative">
          <img src="images/asset 22.jpeg" alt="" className="w-full h-full" />
          <p className="text-md absolute bottom-40 left-15 text-white">
              It's Workout Time
            </p>
          <button className="absolute bottom-1/3 left-40   text-black bg-white/70 w-20 outline-none p-3 text-xs">
              Shop now
            </button>
        </section>
        <section className="w-4/12  h-full flex flex-col gap-y-3 ">
          <section className="w-full h-1/2 relative">
            <img src="images/asset 23.jpeg" className="w-full h-full" alt="" />{" "}
            <p className="text-md absolute top-1/3  text-center w-full text-white">
              It's Workout Time
            </p>{" "}
            <button className="absolute bottom-1/3 left-40   text-black bg-white/70 w-20 outline-none p-3 text-xs">
              Shop now
            </button>{" "}
          </section>
          <section className="w-full h-1/2 relative">
            <img src="images/asset 24.jpeg" className="w-full h-full" alt="" />{" "}
            <p className="text-md absolute top-1/3  text-center w-full text-white">
              It's Workout Time
            </p>{" "}
            <button className="absolute bottom-1/3 left-40   text-black bg-white/70 w-20 outline-none p-3 text-xs">
              Shop now
            </button>{" "}
          </section>
        </section>
      </main>
    </div>
  );
};

export default Layout;
