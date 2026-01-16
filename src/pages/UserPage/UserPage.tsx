import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type  User  from "../../types/User";

function UserPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  async function fetchUser() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/users">← Back</Link>

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.avatar} alt="avatar" width="100px"/>
    </div>
  );
}

export default UserPage;
