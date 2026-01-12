import { useState } from "react";
import { Results } from "../NatiionalityMatch/Results";
import s from "./NationalityMatch.module.css";

export default function NationalityMatch() {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState(null);

  async function fetchNationality(name: string) {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await res.json();
    setInfo(data);
  }

  return (
    <div className={s.container}>
      <h2>Nationality Match</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />

      <button
        type="button"
        onClick={() => {
          fetchNationality(name);
        }}
      >
        Submit
      </button>

      <Results info={info} />
    </div>
  );
}
