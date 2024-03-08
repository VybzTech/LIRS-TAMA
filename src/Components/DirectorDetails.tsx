import Input from "./Input";

type DDetailsProps = {
  name: string;
  fullName: string;
  head: string;
  idPlaceholder: string;
  fullNamePlaceholder: string;
  err: boolean;
  idErr: boolean;
  errMsg: string;
  idErrMsg: string;
};

const DirectorDetails = ({
  name,
  fullName,
  head,
  idPlaceholder,
  fullNamePlaceholder,
  err,
  idErr,
  errMsg,
  idErrMsg,
}: DDetailsProps) => {
  return (
    <div>
      <div className="detailsHead font-medium text-sm text-gray-800">
        {head} details
        <hr />
      </div>
      <div className="flexMe gap-9 mt-4 mb-8">
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

export default DirectorDetails;
