import UploadDoc from "./UploadDoc";
import { useVerify } from "../context/VerificationContext.tsx";

const Requirements = () => {
  const { Uerrors, setUerrors, Utouched, setUtouched } = useVerify();

  const myArray: {
    name: string;
    title: string;
    err: boolean;
    errorMsg: string;
  }[] = [
    {
      name: "cacDoc",
      title: "Upload CAC Document(Particulars of Partners/Directors)",
      err: Uerrors?.cacDoc && Utouched?.cacDoc,
      errorMsg: Uerrors?.cacDoc,
    },
    {
      name: "financial3yrs",
      title: "Audited Financial Statement for the last 3 years",
      err: Uerrors?.financial3yrs && Utouched?.financial3yrs,
      errorMsg: Uerrors?.financial3yrs,
    },
    {
      name: "efccForm",
      title: "Stamped and completed EFCC anti-money laudering form",
      err: Uerrors?.efccForm && Utouched?.efccForm,
      errorMsg: Uerrors?.efccForm,
    },
    {
      name: "formalLetter",
      title: "Formal Application Letter",
      err: Uerrors?.formalLetter && Utouched?.formalLetter,
      errorMsg: Uerrors?.formalLetter,
    },
    {
      name: "regFee",
      title:
        "Evidence of payment of registration fee (50,000 Naira bank draft)",
      err: Uerrors?.regFee && Utouched?.regFee,
      errorMsg: Uerrors?.regFee,
    },
    {
      name: "businessPrem",
      title:
        "Evidence of payment of business premises rate ( Registration / Renewal)",
      err: Uerrors?.businessPrem && Utouched?.businessPrem,
      errorMsg: Uerrors?.businessPrem,
    },
  ];
  return (
    <>
      <p className="mb-2 mt-14 text-[1rem] font-medium text-zinc-700">
        Requirements
      </p>
      <hr />
      {myArray?.map((item, id) => (
        <UploadDoc
          key={id}
          id={id + 1}
          title={item?.title}
          name={item?.name}
          errorMsg={item?.errorMsg}
          err={item?.err}
        />
      ))}
    </>
  );
};
export default Requirements;
