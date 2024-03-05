import React from "react";
import Input from "./Input";
import { useVerify } from "../context/VerificationContext";

type ODetailsProps = {
  name: string;
  head: string;
  fullName: string;
  idPlaceholder: string;
  fullNamePlaceholder: string;
  err: boolean;
  idErr: boolean;
  errMsg: string;
  idErrMsg: string;
};

const PrincipalOfficerDetails = ({
  name,
  head,
  fullName,
  idPlaceholder,
  fullNamePlaceholder,
  err,
  idErr,
  errMsg,
  idErrMsg,
}: ODetailsProps) => {
  const { VAerrors, VAtouched } = useVerify();
  return (
    <div>
      <div className="detailsHead font-semibold text-sm">
        {head} Details
        <hr />
      </div>
      <div className="flexMe gap-7 mt-4 mb-8">
        <Input
          name={name}
          label="Payer ID"
          placeholder={idPlaceholder}
          asComponent=""
          err={idErr}
          errorMsg={idErrMsg}
        />
        <Input
          name={fullName}
          label="Fullname"
          placeholder={fullNamePlaceholder}
          asComponent=""
          err={err}
          errorMsg={errMsg}
        />
      </div>
    </div>
  );
};

export default PrincipalOfficerDetails;
