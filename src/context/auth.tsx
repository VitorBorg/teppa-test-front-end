import { createContext, useState, useEffect } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<boolean>(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [userToken, setUserToken] = useState(
    window.localStorage.getItem("userToken")
  );

  useEffect(() => {}, []);

  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    auth.languageCode = "pt";

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const resultAccess = result.user?.accessToken;

        window.localStorage.setItem("userToken", resultAccess);
        window.localStorage.setItem("auth", "true");

        setUserToken(resultAccess);
        setAuth(true);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
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
      value={{ userToken, auth, signInWithGoogle, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
