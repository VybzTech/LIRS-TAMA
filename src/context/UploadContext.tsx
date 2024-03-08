import { createContext, useState, useContext } from "react";

const UploadContext = createContext({});

export const useUpload = () => useContext(UploadContext);

// type compType ={
//     companyID: string;
//     companyName: string;
//     companyEmail: string;
//     companyNo: string;
//     companyHistory: string;
//     requirements:object;
// };

export const UploadProvider = ({ children }: any) => {
  //   // const [Verrors, setVerrors] = useState<object>({});
  //   // const [Vtouched, setVtouched] = useState<object>({});
  //   // const [Vdirectors, setVdirectors] = useState<object[]>([]);
  //   // const [Vofficers, setVofficers] = useState<object[]>([]);
  //   // const [VAerrors, setVA errors] = useState<object>({});
  //   // const [VAtouched, setVAtouched] = useState<object>({});
  const [Uerrors, setUerrors] = useState<object>({});
  const [Utouched, setUtouched] = useState<object>({});
  const [companyDets, setCompanyDets] = useState<object>({});
  const [uploads, setUploads] = useState<object>({});
  const [U2errors, setU2errors] = useState<object>({});
  const [U2touched, setU2touched] = useState<object>({});

  return (
    <UploadContext.Provider
      value={{
        //         // Verrors,
        //         // setVerrors,
        //         // Vtouched,
        //         // setVtouched,
        //         // Vdirectors,
        //         // setVdirectors,
        //         // Vofficers,
        //         // setVofficers,
        //         // VAerrors,
        //         // setVAerrors,
        //         // VAtouched,
        //         // setVAtouched,
        Uerrors,
        setUerrors,
        Utouched,
        setUtouched,
        companyDets,
        setCompanyDets,
        U2errors,
        setU2errors,
        U2touched,
        setU2touched,uploads, setUploads
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContext;
