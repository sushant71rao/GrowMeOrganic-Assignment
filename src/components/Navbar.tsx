import { Link, NavLink, Outlet } from "react-router-dom";
import ForestIcon from "@mui/icons-material/Forest";
const Navbar = () => {
  return (
    <>
      <div className=" w-full bg-dark text-white">
        <div className="container flex items-center justify-between h-16  mx-auto md:px-24">
          <Link to="/" className="flex items-center gap-2">
            <ForestIcon className="text-mgreen"></ForestIcon>
            <span className="font-bold text-xl text-mgreen">
              GrowMeOrganic-Task
            </span>
          </Link>
          <nav className="flex items-center  gap-6 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-lgreen text-lgreen border-b-2  font-semibold"
                  : "font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="page2"
              className={({ isActive }) =>
                isActive
                  ? "border-b-lgreen text-lgreen border-b-2  font-semibold"
                  : "font-semibold"
              }
            >
              Page 2
            </NavLink>
            <NavLink
              to="page3"
              className={({ isActive }) =>
                isActive
                  ? "border-b-lgreen text-lgreen border-b-2  font-semibold"
                  : "font-semibold"
              }
            >
              Page 3
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="bg-dark min-h-[100vh]">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Navbar;
