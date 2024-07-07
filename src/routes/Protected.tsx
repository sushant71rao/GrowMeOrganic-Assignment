import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext, UserContextType } from "../context/userinfo";
import { Alert, Snackbar } from "@mui/material";

const Protected = () => {
  let { user } = useContext(UserContext) as UserContextType;
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setOpen(true);
    }
  }, [user]);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    console.log(event);
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (!user) {
    navigate("/");
    return (
      <>
        {/* <Navigate to="/" /> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning">
            You Are Not Allowed to Go To this Page As You Have Not filled The
            Necessary Data
          </Alert>
        </Snackbar>
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
