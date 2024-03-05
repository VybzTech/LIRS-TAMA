// import React from "react";
// import Requirements from Requirements.tsx;

import React from "react";
type uploadDoc = {
  id: number;
  title: string;
};

const UploadDoc = ({ id, title }: uploadDoc) => {
  // const uploadFile = (target) => {
  //   document.getElementById("file-name").innerHTML = target.files[0].name;
  // };
  return (
    <div className="mt-4 mb-10 relative w-full">
      <p className="font-semibold text-lg py-1 5 mb-3 text-gray-700">
        {id}. {title}
      </p>
      <input
        className="p-2 border border-zinc-400 opacity-65 rounded rounded-md cursor-pointer"
        type="file"
        // onChange={() => uploadFile(this)}
        // style={{display:'none'}}
        name={title}
        id={title}
      />
      <button
        onClick={() => document.getElementById(title).click()}
        className="bg-blue-600 ml-2 px-6 py-2 text-white border rounded rounded-md"
      >
        Upload
      </button>
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
