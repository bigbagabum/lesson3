import { useState } from "react";

function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Mars");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter astronaut name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      >
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      {name ? (
        <p>🧑‍🚀 Astronaut {name} is headed to {planet}!</p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
}

export default SpaceMissionForm;
