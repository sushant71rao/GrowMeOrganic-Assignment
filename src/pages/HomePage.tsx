import { Alert, Button, Snackbar, TextField, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { FormEvent, useState } from "react";
import { User } from "../types/User";
import { UserContext, UserContextType } from "../context/userinfo";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { setUserFn, clearUser } = useContext(UserContext) as UserContextType;

  const navigate = useNavigate();
  let [data, setData] = useState<User>({ Name: "", PhNo: "", Email: "" });

  function SubmitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (Object.values(data)?.filter((ele) => ele.length == 0).length != 0) {
      alert("Please Fill All the details");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;

      // console.log(emailRegex.test(data?.Email));

      if (!emailRegex.test(data?.Email)) {
        alert("Invalid Email Address");
      } else if (!phoneRegex.test(data.PhNo)) {
        alert("Invalid Phone Number");
      } else {
        setUserFn(data);
        navigate("/page2");
      }
    }
  }

  const [open, setOpen] = React.useState(false);

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

  return (
    <div className="p-8 ">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" sx={{ width: "100%" }}>
          Cleared The LocalStorage !!!
        </Alert>
      </Snackbar>
      <div className="flex justify-center flex-col items-center">
        <form
          className="flex flex-col gap-4 bg-mgreen rounded-md  shadow-sm p-6 md:w-[32rem]"
          onSubmit={SubmitHandler}
        >
          <div className="flex flex-col gap-1 text-center">
            <div className="text-xl md:text-3xl font-semibold text-white">
              Registration Desk
            </div>
            <div className="text-dgreen text-sm font-semibold tracking-wider">
              Please Enter Your Data Correctly
            </div>
          </div>
          <TextField
            label="Name"
            sx={{
              "& .MuiInput-underline:after": {
                borderBottomColor: "#183D3D",
              },
              // "& .MuiInputBase-input": {
              //   color: "#183D3D",
              // },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#183D3D",
              },
            }}
            variant="standard"
            size="medium"
            value={data?.Name}
            onChange={(e) => {
              setData((old) => ({ ...old, Name: e.target.value }));
            }}
          />
          <TextField
            label="Phone Number"
            variant="standard"
            sx={{
              "& .MuiInput-underline:after": {
                borderBottomColor: "#183D3D",
              },
              // "& .MuiInputBase-input": {
              //   color: "black",
              // },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#183D3D",
              },
            }}
            size="medium"
            value={data?.PhNo}
            onChange={(e) => {
              setData((old) => ({ ...old, PhNo: e.target.value }));
            }}
          />
          <TextField
            label="Email"
            variant="standard"
            size="medium"
            sx={{
              "& .MuiInput-underline:after": {
                borderBottomColor: "#183D3D",
              },
              // "& .MuiInputBase-input": {
              //   color: "#183D3D",
              // },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "#183D3D",
              },
            }}
            value={data?.Email}
            onChange={(e) => {
              setData((old) => ({ ...old, Email: e.target.value }));
            }}
          />
          <div className="flex w-full gap-3">
            <Button
              type="submit"
              variant="contained"
              className="w-full"
              style={{
                backgroundColor: "#183d3d",
              }}
            >
              Submit
            </Button>
            <Tooltip title="Click here to clear the Local Storage data">
              <Button
                className="w-full"
                variant="contained"
                style={{
                  backgroundColor: "#183d3d",
                }}
                onClick={() => {
                  clearUser();
                  setOpen(true);
                }}
              >
                Clear Record
              </Button>
            </Tooltip>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
