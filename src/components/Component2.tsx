import { Checkbox, FormControlLabel, checkboxClasses } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Ioption {
  department: string;
  sub_departments: string[];
}

const Component2 = () => {
  let options: Ioption[] = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  return (
    <>
      <div className="text-white text-center md:text-3xl text-xl font-semibold py-6">
        Implementation of The Custom-Select Component
      </div>
      <div className="flex justify-center items-center">
        <div className="text-white bg-mgreen p-4 rounded-md">
          {options?.map((el, i) => {
            return (
              <div key={i}>
                <SingleDept {...el}></SingleDept>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const SingleDept = (prop: Ioption) => {
  const [checked, setChecked] = React.useState<boolean[]>(
    prop?.sub_departments.map(() => false)
  );

  const [open, setopen] = useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setopen(true);
    setChecked((old) => old.map(() => event.target.checked));
  };

  const handleChange2 = (
    event: React.ChangeEvent<HTMLInputElement>,
    ind: number
  ) => {
    setChecked((old) => {
      let temp = [...old];
      temp[ind] = event.target.checked;
      return temp;
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <FormControlLabel
            className="font-bold"
            label={prop?.department}
            control={
              <Checkbox
                checked={
                  checked?.filter((ele) => ele == true).length ==
                  checked?.length
                }
                sx={{
                  [`&,&.${checkboxClasses.checked}`]: {
                    color: "#183D3D",
                  },
                }}
                onChange={handleChange1}
              />
            }
          ></FormControlLabel>
          <button
            onClick={() => {
              setopen(!open);
            }}
          >
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </button>
        </div>
        {open && (
          <>
            <div className="flex flex-col ml-4">
              {prop?.sub_departments?.map((ele, ind) => {
                return (
                  <FormControlLabel
                    key={ind}
                    label={ele}
                    control={
                      <Checkbox
                        sx={{
                          [`&,&.${checkboxClasses.checked}`]: {
                            color: "#183D3D",
                          },
                        }}
                        checked={checked[ind]}
                        onChange={(e) => handleChange2(e, ind)}
                      />
                    }
                  />
                );
              })}
            </div>
            <br></br>
          </>
        )}
      </div>
    </>
  );
};

export default Component2;
