import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type  User  from "../../types/User";

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
