import { createContext, useState } from "react";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<boolean>(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [userToken, setUserToken] = useState(
    window.localStorage.getItem("userToken")
  );

  const authValidation = getAuth();

  const signWithEmail = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    createUserWithEmailAndPassword(authValidation, email, password)
      .then((userCredential: any) => {
        // Signed in
        console.log("Criado!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  const signWithEmailPassword = (email: string, password: string) => {
    console.log(email + ", " + password);

    signInWithEmailAndPassword(authValidation, email, password)
      .then((userCredential: any) => {
        // Signed in
        const user = userCredential.user;
        const resultAccess = user?.accessToken!;

        window.localStorage.setItem("userToken", resultAccess);
        window.localStorage.setItem("auth", "true");

        setUserToken(resultAccess);
        setAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    auth.languageCode = "pt";

    signInWithPopup(authValidation, provider)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        const resultAccess = result.user?.accessToken!;

        window.localStorage.setItem("userToken", resultAccess);
        window.localStorage.setItem("auth", "true");

        setUserToken(resultAccess);
        setAuth(true);
      })
      .catch((error) => {
        console.log();
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(errorCode);
        console.log(errorMessage);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };
  const signout = () => {
    //reseta o token para deslogar
    setAuth(false);
    setUserToken("");
    localStorage.removeItem("auth");
    localStorage.removeItem("userToken");
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        auth,
        signInWithGoogle,
        signout,
        signWithEmail,
        signWithEmailPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
