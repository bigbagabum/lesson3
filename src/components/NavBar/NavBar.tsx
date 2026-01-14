import { FallbackFragment } from "ethers";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to={"/"} className={s.link}>
        Home
      </NavLink>
      <NavLink to={"/gender-revel"} className={s.link}>
        Gender revel
      </NavLink>
      <NavLink to={"/nationalize"} className={s.link}>
        Nationality
      </NavLink>
      <NavLink to={"/counter"} className={s.link}>
        Counter
      </NavLink>
      <NavLink to={"/space-mission"} className={s.link}>
        Space Mission
      </NavLink>
      <NavLink to={"/about"} className={s.link}>
        About
      </NavLink>
      <NavLink to={"/contact"} className={s.link}>
        Contact
      </NavLink>
      <NavLink to={"/profile"} className={s.link}>
        Profile
      </NavLink>
    </nav>
  );
}
