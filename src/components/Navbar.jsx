import React, { useContext, useRef } from "react";
import DataContext from "../contexts/DataContext";

const Navbar = () => {
  const { file, setFile } = useContext(DataContext);
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleLogoClick = () => {
    window.location.reload();
  }

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex cursor-pointer" onClick={handleLogoClick}>
            <img src="RDV_Logo.png" className="h-10" alt="Rule-D Validator" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3">
              Rule-D Validator
            </span>
          </div>

          <div className="flex">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleUploadButtonClick}
            >
              Upload File
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
