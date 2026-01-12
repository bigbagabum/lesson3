import { useEffect, useState } from "react";
import { planetOptions } from "./selectOptions";
import styles from "./SpaceMissionForm.module.css";

function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Mars");

  useEffect(() =>{
    console.log("UseEffect with out dependencies");
  });


  useEffect(() =>{
    console.log("UseEffect with dependencies of name");
  }, [name, planet]);


  return (
    <section className={styles.container}>
      <input
        type="text"
        placeholder="Enter astronaut name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
        {planetOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select >

      {name ? (
        <p>
          🧑‍🚀 Astronaut {name} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </section>
  );
}

export default SpaceMissionForm;
