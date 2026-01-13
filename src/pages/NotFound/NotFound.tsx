import { Link } from "react-router-dom";
import RandomDog from "../../components/RandomDog/RandomDog";

export default function NotFound(){
  return (<div>
    <h2>404 - Not Found</h2>
    <Link to="/">Going HOME PAGE</Link>
    <RandomDog />
    </div>)
}
