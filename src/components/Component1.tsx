import { useContext, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { UserContext, UserContextType } from "../context/userinfo";
import { CircularProgress } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef<Post>[] = [
  { field: "userId", flex: 0.3, headerName: "UID" },
  {
    field: "id",
    flex: 0.3,
    headerName: "ID",
  },
  {
    field: "title",
    minWidth: 300,
    flex: 1,
    headerName: "Title",
  },
  {
    field: "body",
    minWidth: 300,
    flex: 1,
    headerName: "Body",
  },
];

const Component1 = () => {
  let { user } = useContext(UserContext) as UserContextType;
  let [posts, SetPosts] = useState<Post[]>();
  let [loading, setLoading] = useState<"Loading" | "Success" | "Failure">(
    "Loading"
  );
  useEffect(() => {
    (async () => {
      try {
        setLoading("Loading");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = (await res.json()) as Post[];
        SetPosts(data);
        setLoading("Success");
      } catch (error) {
        console.warn(error);
        setLoading("Failure");
      }
    })();
  }, []);

  // console.log(posts);
  return (
    <div className="flex flex-col gap-4 p-4 py-8">
      <div className="flex flex-col gap-1 text-center">
        <div className="text-4xl font-bold text-white">
          Welcome {user?.Name}
        </div>
        <div className="text-base font-semibold text-slate-400">
          Below is the List of Posts Fetched from the JSON PLACEHOLDER API
        </div>
      </div>
      <div className=" lg:mx-28 ">
        {loading == "Loading" ? (
          <div className="text-center mt-8">
            <CircularProgress />
          </div>
        ) : loading == "Failure" ? (
          <div className="text-2xl text-center text-red-400 underline">
            Error in Fetching The Data !!!
          </div>
        ) : (
          <>
            <div className="overflow-x-scroll">
              <DataGrid
                rows={posts}
                columns={columns}
                className="bg-mgreen overflow-hidden"
                sx={{
                  ".MuiDataGrid-columnHeaderTitle": {
                    fontWeight: 1000,
                    fontSize: "17px",
                  },

                  ".MuiDataGrid-columnHeader": {
                    bgcolor: "#5C8374",
                  },
                  ".MuiDataGrid-cell": {
                    fontWeight: 600,
                    bgcolor: "#97bcaf",
                    border: "none",
                  },
                }}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 8,
                    },
                  },
                }}
                pageSizeOptions={[8]}
              ></DataGrid>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Component1;
