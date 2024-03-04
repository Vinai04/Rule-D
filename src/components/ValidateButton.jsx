import React, { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as acorn from "acorn";

const ValidateButton = () => {
  const { file, setFile } = useContext(DataContext);
  const { output, setOutput } = useContext(DataContext);

  const Validator = async () => {
    const getExtension = (fileName) => {
      const parts = fileName.split(".");
      return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
    };

    const filetype = getExtension(file.name);

    if (file) {
      try {
        const fileContent = await readFileContent(file);
        const fileName = file.name.toLowerCase();

        if (fileName.endsWith(".json")) {
          const jsonData = JSON.parse(fileContent);
          console.log("Valid JSON file:", jsonData);
          setOutput(fileContent);
          toast.success("This file is a Valid JSON file!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (fileName.endsWith(".js")) {
          const ast = acorn.parse(fileContent, { ecmaVersion: "latest" });
          console.log("Valid JavaScript file:", fileContent);
          setOutput(fileContent);
          toast.success("This file is a Valid Javascript file!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          console.error(
            "Invalid file type. Please select a JSON or JavaScript file."
          );
          toast.warn(
            "Invalid file type. Please select a JSON or JavaScript file.",
            {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        }
      } catch (error) {
        console.error(`This ${filetype} file is Invalid!`, error);
        toast.error(`This ${filetype} file is Invalid!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    } else {
      console.error("No file selected. Please choose a file to validate.");
      toast.warn("No file selected. Please choose a file to validate.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  };

  return (
    <>
      <button
        type="button"
        className="text-white self-center scale-92 hover:scale-110 ease-in duration-300 bg-gradient-to-r text-2xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-12 py-3 text-center me-2 mb-2"
        onClick={Validator}
      >
        Validate
      </button>
      <br></br>
    </>
  );
};

export default ValidateButton;
