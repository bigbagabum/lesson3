import "./App.css";
import Counter from "./components/Counter/Counter";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaseMissionForm";
import Tool from "./components/Tool/Tool";

function App() {
  return <>
   <Goodbye familyName="Smit" score={1}/>;
   <Goodbye familyName="Petrov" score={2}/>;

   <ProfileCard avatar="https://i.pravatar.cc/150?img=3" 
   name = "John Smith" 
   description = "I am superman"></ProfileCard>

   <Counter />
  
   
   <Tool />
   <SpaceMissionForm />
  </>
}

export default App;