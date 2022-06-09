import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCndxYl0vtS2LagHm5DNuwU8jUQvYCLE-0",
  authDomain: "login-farmer.firebaseapp.com",
  projectId: "login-farmer",
  storageBucket: "login-farmer.appspot.com",
  messagingSenderId: "386671425852",
  appId: "1:386671425852:web:2c31fe499ddc555e300639",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
