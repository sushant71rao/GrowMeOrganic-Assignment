import * as React from "react";
import { User } from "../types/User";

export interface UserContextType {
  user: User | undefined;
  setUserFn: (user: User) => void;
  getUser: () => void;
  clearUser: () => void;
}

export const UserContext = React.createContext<UserContextType | null>(null);

let setFn = () => {
  let localdata = localStorage.getItem("UserInfo");
  if (localdata && localdata?.length > 0) {
    return JSON.parse(localdata);
  }
  return undefined;
};

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let [user, setUser] = React.useState<User | undefined>(setFn());
  let getUser = () => {
    let localdata = localStorage.getItem("UserInfo");
    if (localdata && localdata?.length > 0) {
      setUser(JSON.parse(localdata));
    }
  };
  // getUser();

  let clearUser = () => {
    localStorage.removeItem("UserInfo");
    setUser(undefined);
  };
  let setUserFn = (user: User) => {
    localStorage.setItem("UserInfo", JSON.stringify(user));
    setUser(user);
  };
  return (
    <UserContext.Provider value={{ user, getUser, clearUser, setUserFn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
