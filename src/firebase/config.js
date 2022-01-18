import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  ...secret keys
};

const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };
