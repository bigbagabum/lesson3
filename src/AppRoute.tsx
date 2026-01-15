import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import ProfileLayout from "./layouts/ProfileLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import NationalityMatch from "./components/NatiionalityMatch/NationalityMatch";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

import Profile from "./pages/Profile/Profile";
import ProfileData from "./pages/ProfileData/ProfileData";
import Settings from "./pages/Settings/Settings";

import ProductPage from "./pages/ProductPage/ProductPage";
import Car from "./pages/Car/Car";

import UsersList from "./pages/UsersList/UsersList";
import UserPage from "./pages/UserPage/UserPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gender-revel" element={<GenderReveal />} />
        <Route path="nationalize" element={<NationalityMatch />} />
        <Route path="counter" element={<Counter />} />
        <Route path="space-mission" element={<SpaceMissionForm />} />
        <Route path="profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path="data" element={<ProfileData />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="products/:id" element={<ProductPage />} />

        <Route path="users" element={<UsersList />} />
        <Route path="users/:id" element={<UserPage />} />

        <Route path="cars/:carModel" element={<Car />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
