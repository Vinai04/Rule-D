import React, { useContext, useState } from "react";
import FileDropZone from "./FileDropZone";
import ValidateButton from "./ValidateButton";
import Footer from "./Footer";
import Output from "./Output";
import DataContext from "../contexts/DataContext";

const MainContents = () => {
  const { output, setOutput } = useContext(DataContext);

  return (
    <>
      <div>
        <h1 className="mt-32 text-center text-black text-2xl">
          <span className="text-3xl font-semibold">
            Validate with Confidence!
          </span>{" "}
          <br></br> Your Ultimate JSON and JavaScript File Validator
        </h1>
      </div>
      <div className="mt-12 ml-64 mr-64">
        <FileDropZone />
      </div>
      <div className="flex justify-center items-center mt-8">
        <ValidateButton />
      </div>
      {output && (
        <div className="flex justify-center items-center mt-8">
          <Output />
        </div>
      )}
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default MainContents;
