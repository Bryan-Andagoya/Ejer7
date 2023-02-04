import { User } from "firebase/auth";
import { createContext } from "react";

export interface UserStore {
  isAuthenticated: boolean;
  user: User;
  registerUser: (email: string, password: string) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
  logOutUser: () => Promise<void>;
}

export const UserContext = createContext<UserStore>({} as UserStore);
