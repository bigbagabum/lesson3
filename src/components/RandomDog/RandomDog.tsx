import { useEffect, useState } from "react";

export default function RandomDog() {
  const [imageUrl, setImage] = useState<string>("");

  async function fetchDogImage() {
    console.log("Fetch");
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    //console.log(data);
    setImage(data.message);
  }

  useEffect(() => {
    fetchDogImage();
  }, []);
  return <div>
    <h2></h2>
    <img src={imageUrl} alt="dog" height={300}/>
    </div>;
}
