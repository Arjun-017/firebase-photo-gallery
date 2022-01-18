import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { projectStorage, projectFirestore } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //references
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        const docRef = await addDoc(collection(projectFirestore, "pictures"), {
          createdAt: serverTimestamp(),
          url,
        });
      }
    );
  }, [file]);
  return { progress };
};

export default useStorage;
