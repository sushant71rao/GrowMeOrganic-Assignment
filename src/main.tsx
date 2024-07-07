import ReactDOM from "react-dom/client";
import "./index.css";
import CustomRoute from "./routes/route.tsx";
import UserProvider from "./context/userinfo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <CustomRoute></CustomRoute>
  </UserProvider>
);
