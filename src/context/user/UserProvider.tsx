import { useState } from "react";

import { UserContext, UserStore } from "./UserContext";

interface Props {
  children: JSX.Element;
}

export const UserProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const store: UserStore = {
    isAuthenticated,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
