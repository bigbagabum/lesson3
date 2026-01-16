import { Routes, Route } from "react-router-dom";

import Layout from "../layouts/Layout";
import ProfileLayout from "../layouts/ProfileLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

import Counter from "../components/Counter/Counter";
import GenderReveal from "../components/GenderReveal/GenderReveal";
import NationalityMatch from "../components/NatiionalityMatch/NationalityMatch";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";

import Profile from "../pages/Profile/Profile";
import ProfileData from "../pages/ProfileData/ProfileData";
import Settings from "../pages/Settings/Settings";

import ProductPage from "../pages/ProductPage/ProductPage";
import Car from "../pages/Car/Car";

import UsersList from "../pages/UsersList/UsersList";
import UserPage from "../pages/UserPage/UserPage";
import { ROUTES as R } from "../shared/routes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={R.ABOUT} element={<About />} />
        <Route path={R.CONTACT} element={<Contact />} />
        <Route path={R.GENDER_REVEL} element={<GenderReveal />} />
        <Route path={R.NATIONALIZE} element={<NationalityMatch />} />
        <Route path={R.COUNER} element={<Counter />} />
        <Route path={R.SPACE_MISSION} element={<SpaceMissionForm />} />
        <Route path={R.PROFILE} element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path={R.PROFILE_DATA} element={<ProfileData />} />
          <Route path={R.PROFILE_SETTINGS} element={<Settings />} />
        </Route>
        <Route path={R.PRODUCT_PAGE} element={<ProductPage />} />

        <Route path={R.USERS_LIST} element={<UsersList />} />
        <Route path={R.USER_PAGE} element={<UserPage />} />

        <Route path={R.CAR_PAGE} element={<Car />} />
      </Route>
      <Route path={R.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
