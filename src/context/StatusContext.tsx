import { createContext, useState, useContext } from "react";
// import React from 'react'

// const Status = () => {
//   return (
//     <div>Status</div>
//   )
// }

// export default Status

// ('Verified', 'Validated', 'Uploaded', 'Completed') Verification

const StatusContext = createContext("");

// type statusProp = { status: string; setStatus: React.Dispatch<React.SetStateAction<string>>; }

export const useStatus = () => useContext(StatusContext);

export const StatusProvider = ({ children }: any) => {
  const [status, setStatus] = useState<string>("");

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
