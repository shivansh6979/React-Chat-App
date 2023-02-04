import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase-config";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const Auth = () => {
  const clickHandler = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      cookies.set("Auth-Token", result.user.refreshToken);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button onClick={clickHandler}>Sign In With Google</button>
    </div>
  );
};

export default Auth;
