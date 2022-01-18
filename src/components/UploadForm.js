import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import useStorage from "../hooks/useStorage";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  let types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setError("Invalid file type!");
      setFile(null);
    }
  };
  return (
    <form>
      <input type="file" onChange={changeHandler} id="upload-btn" hidden />
      <label htmlFor="upload-btn">Upload</label>
      {error && <p className="error-msg">{error}</p>}
      {file && (
        <ProgressBar file={file} setFile={setFile} setError={setError} />
      )}
    </form>
  );
};

export default UploadForm;
