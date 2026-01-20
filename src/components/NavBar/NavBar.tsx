import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import { ROUTES as R } from "../../shared/routes/index";
import { useCount } from "../../hooks/useCount";

export default function NavBar() {
  const { count } = useCount();
  return (
    <nav className={s.container}>
      <span>{count}</span>
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
      <NavLink to={R.PRODUCT_LIST} className={s.link}>
        Products
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
      <NavLink to="/users" className={s.link}>
        Users
      </NavLink>
      <NavLink to={R.SIGNUP} className={s.link}>
        Sign Up FREE
      </NavLink>
      <NavLink to={R.SIGNIN} className={s.link}>
        Sign In
      </NavLink>
      <NavLink to={R.CREATE_CATEGORY} className={s.link}>
        Create Category
      </NavLink>
    </nav>
  );
}
