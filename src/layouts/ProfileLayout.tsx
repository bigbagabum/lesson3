import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink to={"/profile/settings"}>Settings</NavLink>
        <NavLink to={"/profile/data"}>ProfileData</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
