import React from "react";
import { useState } from "react";
import App from "../App";
import { doc, deleteDoc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
const PictureGrid = ({ pictures, setPictures }) => {
  const clickHandler = (id) => {
    const newPictures = pictures.filter((picture) => picture.id !== id);
    setPictures(newPictures);
    deleteDoc(doc(projectFirestore, "pictures", id))
      .then(() => {
        alert("Picture Deleted!");
      })
      .catch((err) => console.err(err));
  };
  return (
    <div className="picture-grid">
      {pictures.map((picture) => (
        <img
          src={picture.url}
          key={picture.id}
          onDoubleClick={() => {
            clickHandler(picture.id);
          }}
        />
      ))}
    </div>
  );
};

export default PictureGrid;
