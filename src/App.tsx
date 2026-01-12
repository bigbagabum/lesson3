import "./App.css";
import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import Goodbye from "./components/Goodbye/Goodbye";
import NationalityMatch from "./components/NatiionalityMatch/NationalityMatch";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import RandomDog from "./components/RandomDog/RandomDog";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Tool from "./components/Tool/Tool";

function App() {
  return (
    <>
      <Goodbye familyName="Smit" score={1} />;
      <Goodbye familyName="Petrov" score={2} />;
      <NationalityMatch />
      <GenderReveal />
      <RandomDog />
      <ProfileCard
        avatar="https://i.pravatar.cc/150?img=3"
        name="John Smith"
        description="I am superman"
      ></ProfileCard>
      <Counter />
      <Tool />
      <SpaceMissionForm />
    </>
  );
}

export default App;
