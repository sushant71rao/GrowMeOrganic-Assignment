import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext, UserContextType } from "../context/userinfo";

const Protected = () => {
  let { user } = useContext(UserContext) as UserContextType;

  if (!user) {
    alert(
      "You Are Not Allowed to Go To this Page As You Have Not filled The Necessary Data"
    );
    return (
      <>
        <Navigate to="/" />;
      </>
    );
  }
  return (
    <>
      <Outlet></Outlet>;
    </>
  );
};

export default Protected;
