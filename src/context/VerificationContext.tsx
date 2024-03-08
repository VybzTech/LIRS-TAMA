import { createContext, useState, useContext } from "react";

const VerificationContext = createContext({});

export const useVerify = () => useContext(VerificationContext);

export const VerificationProvider = ({ children }: any) => {
  const [Verrors, setVerrors] = useState<object>({});
  const [Vtouched, setVtouched] = useState<object>({});
  const [Vdirectors, setVdirectors] = useState<object[]>([]);
  const [Vofficers, setVofficers] = useState<object[]>([]);
  const [VAerrors, setVAerrors] = useState<object>({});
  const [VAtouched, setVAtouched] = useState<object>({});

  return (
    <VerificationContext.Provider
      value={{
        Verrors,
        setVerrors,
        Vtouched,
        setVtouched,
        Vdirectors,
        setVdirectors,
        Vofficers,
        setVofficers,
        VAerrors,
        setVAerrors,
        VAtouched,
        setVAtouched,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};

export default VerificationContext;
