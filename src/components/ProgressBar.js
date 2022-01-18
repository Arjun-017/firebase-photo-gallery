import React from "react";
import { useState } from "react";

import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress } = useStorage(file);
  return (
    progress < 100 && (
      <div className="progress-bar-outer">
        <div
          className="progress-bar-inner"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    )
  );
};
export default ProgressBar;
