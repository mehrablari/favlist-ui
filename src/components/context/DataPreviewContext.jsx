// AppContext.js
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataContextProvider({ children }) {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <DataContext.Provider value={{ submittedData, setSubmittedData }}>
      {children}
    </DataContext.Provider>
  );
}


