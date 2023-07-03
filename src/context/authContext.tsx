import React, { useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({} as AuthContextProp);

type AuthContextProviderProp = {
  children: React.ReactNode;
};

type AuthContextProp = {
  user: UserType;
  signup: (name: string, email: string, password: string) => void;
  signin: (email: string, password: string) => void;
  signout: () => void;
  signupGoogle: () => void;
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

  React.useEffect(() => {
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

  useEffect(() => {
    console.log(user);
  }, [user]);

  const signup = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const resUser = res?.user;

        updateProfile(resUser, {
          displayName: name,
        });
        window.location.reload();
      })
      .catch((err) => console.error("Error", err))
      .finally(() => {});
  };

  const signupGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log(user.displayName, user.email, user.uid);
    } catch (error: any) {
      // Handle Errors here.
      console.log(error.messsage);
    }
  };

  const signin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/articles");
    } catch (err: any) {
      console.error(err.message);
      return [false, err.message];
    }
  };

  const signout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, signin, signout, signupGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};
