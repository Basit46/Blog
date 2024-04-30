import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({} as AuthContextProp);

type AuthContextProviderProp = {
  children: React.ReactNode;
};

type AuthContextProp = {
  user: UserType;
  signout: () => void;
  signInGoogle: () => void;
};

type UserType = {
  name: string | null;
  email: string | null;
  id: string | null;
};

const AuthContextProvider = ({ children }: AuthContextProviderProp) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<UserType>({
    name: null,
    email: null,
    id: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          id: currentUser?.uid,
          name: currentUser?.displayName,
          email: currentUser?.email,
        });
      } else {
        setUser({
          id: null,
          name: null,
          email: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/articles");
    } catch (error: any) {
      console.log(error.messsage);
    }
  };

  const signout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signout, signInGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};
