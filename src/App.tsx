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
            <Route
              path="/profile"
              element={
                <ProfileCard
                  avatar="https://i.pravatar.cc/150?img=3"
                  name="John Smith"
                  description="I am superman"
                ></ProfileCard>
              }
            />
            <Route path="/space-mission" element={<SpaceMissionForm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
