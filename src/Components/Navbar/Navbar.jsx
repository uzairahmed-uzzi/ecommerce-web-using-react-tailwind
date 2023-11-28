import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ActionButton from "../ActionButton/ActionButton";

const Navbar = () => {
  return (
    <div className="w-full h-36 bg-black py-3 px-4">
      <div className="w-full h-2/3">
        <div className="flex justify-between mx-auto w-full h-full ">
          <div className="w-3/12 h-5/6 flex justify-start items-center ">
            <div className="w-3/6 h-5/6">
              <img src="images/asset 0.png" alt="Logo" className="w-full h-full"/>
            </div>
          </div>
          <div className="w-5/12 h-full flex justify-center items-center">
            <div className="w-full h-auto">
                <SearchBar/>
            </div>
          </div>
          <div className="w-3/12 h-full flex items-center">
            <div className="w-full h-1/3 flex justify-between">
                
                <ActionButton/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/3">
        <div className="mx-auto  w-11/12 h-full">
            <div className="mx-auto w-8/12 h-2/3 text-search-input-col flex justify-evenly">
                <div>Home</div>
                <div>Men</div>
                <div>Women</div>
                <div>Kids</div>
                <div>New</div>
                <div>Sale</div>
                <div>Contact</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
