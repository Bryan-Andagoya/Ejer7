import { createContext } from "react";

export interface UserStore {
  isAuthenticated: boolean;
}

export const UserContext = createContext<UserStore>({} as UserStore);
