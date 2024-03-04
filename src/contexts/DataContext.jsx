import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState("");

  return (
    <DataContext.Provider value={{ file, setFile, output, setOutput }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
