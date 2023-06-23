import React from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext({} as AuthContextProp);

type AuthContextProviderProp = {
  children: React.ReactNode;
};

type AuthContextProp = {
  user: UserType;
  signup: (name: string, email: string, password: string) => void;
  signin: (email: string, password: string) => void;
  signout: () => void;
};

type UserType = {
  name: string | null;
  email: string | null;
  id: string | null;
};

const AuthContextProvider = ({ children }: AuthContextProviderProp) => {
  const [user, setUser] = React.useState<UserType>({
    name: null,
    email: null,
    id: null,
  });

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
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

      // console.log(user);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const signup = (name: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const resUser = res?.user;
        updateProfile(resUser, {
          displayName: name,
        });
      })
      .catch((err) => console.error("Error", err))
      .finally(() => window.location.reload());
  };

  const signin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).catch((err) =>
      console.error("Error", err)
    );
  };
  const signout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};
