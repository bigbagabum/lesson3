import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import NationalityMatch from "./components/NatiionalityMatch/NationalityMatch";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProfileLayout from "./layouts/ProfileLayout";
import Profile from "./pages/Profile/Profile";
import ProfileData from "./pages/ProfileData/ProfileData";
import Settings from "./pages/Settings/Settings";
import ProductPage from "./pages/ProductPage/ProductPage";
import Car from "./pages/Car/Car";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gender-revel" element={<GenderReveal />} />
            <Route path="/nationalize" element={<NationalityMatch />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/space-mission" element={<SpaceMissionForm />} />
            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile/" element={<Profile />} />
              <Route path="/profile/data/" element={<ProfileData />} />
              <Route path="/profile/settings/" element={<Settings />} />
            </Route>
            <Route path="/products/:id" element={<ProductPage />}></Route>
            <Route path="/cars/:carModel" element={<Car />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
