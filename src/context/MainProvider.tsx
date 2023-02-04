import { UserProvider } from "./user/UserProvider";

interface Props {
  children: JSX.Element;
}

export const MainProvider = ({ children }: Props) => {
  return <UserProvider>{children}</UserProvider>;
};
