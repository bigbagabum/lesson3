import { useParams } from "react-router-dom"

export default function Car() {
    const {carModel} = useParams();
  return (
    <div>
      Car with model {(carModel==="bmw-x-5")?"BMW X5":"Unknown Model"}
    </div>
  )
}
