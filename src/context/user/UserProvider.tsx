import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { UserContext, UserStore } from "./UserContext";
import { auth } from "../../config";

interface Props {
  children: JSX.Element;
}

export const UserProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setUser({} as User);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const registerUser: UserStore["registerUser"] = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredential.user);
      setIsAuthenticated(true);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const loginUser: UserStore["loginUser"] = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredential.user);
      setIsAuthenticated(true);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const logOutUser: UserStore["logOutUser"] = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const store: UserStore = {
    isAuthenticated,
    user,
    registerUser,
    loginUser,
    logOutUser,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
