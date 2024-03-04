import React, { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";

const Output = () => {
  const { output, setOutput } = useContext(DataContext);

  return (
    <>
      {output && (
        <div className="w-full max-w-5xl">
          <div className="relative bg-gray-50 rounded-lg dark:bg-gray-200 p-4 px-10 py-10 ">
            <div className="overflow-scroll max-h-72">{output}</div>
            <div className="absolute top-2 end-2 bg-gray-50 dark:bg-gray-200">
              <button
                data-copy-to-clipboard-target="code-block"
                data-copy-to-clipboard-content-type="innerHTML"
                data-copy-to-clipboard-html-entities="true"
                className="text-gray-900 dark:text-gray-400 m-1 hover:bg-gray-100 dark:bg-gray-600 dark:border-gray-600 dark:hover:bg-gray-800 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
              >
                <span id="default-message" className="inline-flex items-center">
                  <svg
                    className="w-3 h-3 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                  <span className="text-xs font-semibold">Copy code</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Output;