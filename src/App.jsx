import { useState } from "react";
import "./index.css";
import { DataProvider } from "./contexts/DataContext";
import Navbar from "./components/Navbar";
import MainContents from "./components/MainContents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <DataProvider>
        <Navbar />
        <MainContents />
      </DataProvider>
      <ToastContainer />
    </>
  );
}

export default App;
