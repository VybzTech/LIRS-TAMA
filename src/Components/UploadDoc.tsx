import { Field } from "formik";
import ErrorInfo from "./ErrorInfo";

type uploadDoc = {
  id: number;
  title: string;
  name: string;
  errorMsg: string;
  err: boolean;
};

const UploadDoc = ({ id, title, name, err, errorMsg }: uploadDoc) => {
  // const uploadFile = (target) => {
  //   document.getElementById("file-name").innerHTML = target.files[0].name;
  // };
  return (
    <div className="mt-4 mb-8 relative w-full">
      <div className="flex justify-between pr-5">
        <p className="font-medium text-[1rem] py-1.5 mb-2 text-gray-700">
          <span className="text-lg text-black mr-1  ">{id}. </span>
          {title}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Field
            className="p-2 w-64 ml-1 mr-1 border border-zinc-400 opacity-65 rounded rounded-md cursor-pointer"
            type="file"
            id={name}
            name={name}
          />
          <button
            type="button"
            onClick={() => {
              document?.getElementById(name).click();
            }}
            className="bg-blue-500 ml-2 px-6 py-2 text-white border rounded rounded-md duration-300 transition-all ease ease-in-out hover:bg-blue-600"
          >
            Upload
          </button>
        </div>
        {err && <ErrorInfo info={errorMsg} />}
      </div>

      {/* <label htmlFor="file" className="flex gap-4">
        <span
          id="file-name"
          className="file-box inline-block w-[30%] text-slate-500 border border-md px-5 py-3 rounded"
          //  h-[calc(1rem - 2px)]"
        >
          No file chosen
        </span>
        <button className="bg-blue-600 px-6 py-1.5 text-white border rounded rounded-md">
          Upload
        </button>
      </label> */}
      {/* <label htmlFor={title}> */}
      {/* </label> */}
      {/* <Input label="" placeholder={No file chosen} /> */}
      {/* <button className="bg-green-500 text-white rounded rounded-md px-5 py-3 w-full text-sm capitalize font-semibold my-5">Upload</button> */}
    </div>
  );
};

export default UploadDoc;
