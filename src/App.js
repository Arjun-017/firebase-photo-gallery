/* eslint-disable */

import React from "react";
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import PictureGrid from "./components/PictureGrid";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { projectFirestore } from "./firebase/config";

function App() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const collectionRef = collection(projectFirestore, "pictures");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      let pics = [];
      snapshot.docs.forEach((doc) => {
        pics.push({ ...doc.data(), id: doc.id });
      });
      setPictures(pics);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <PictureGrid pictures={pictures} setPictures={setPictures} />
    </div>
  );
}

export default App;
