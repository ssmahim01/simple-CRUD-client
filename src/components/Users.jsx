import { useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = _id => {
    console.log(_id);
    fetch(`http://localhost:4000/users/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            alert("Deleted successfully");
            const remaining = users.filter(user => user._id !== _id);
            setUsers(remaining);
        }
    })
  };

  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name}, <br />
             {user.email}
             <Link to={`/update/${user._id}`} style={{
              marginLeft: "0.5rem"
             }}><button>
              Update
              </button></Link>
             <button onClick={() => handleDeleteUser(user._id)} style={{
              marginLeft: "0.5rem"
             }}>X</button>
          </p>
        ))}
      </div>

      <NavLink to="/"><button style={{
        backgroundColor: "blueviolet",
        color: "white"
      }}>Back to Home</button></NavLink>
    </div>
  );
};

export default Users;
