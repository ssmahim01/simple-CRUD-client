import { NavLink, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const UpdatedUser = { name, email };

    // console.log(user);

    fetch(`http://localhost:4000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully");
        }
      });
  };

  return (
    <div>
      <h2>Update Information Of {loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedUser?.name} />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedUser?.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>

      <NavLink to="/users">
        <button
          style={{
            marginTop: "1rem",
            backgroundColor: "blueviolet",
            color: "white",
          }}
        >
          Back to Users
        </button>
      </NavLink>
    </div>
  );
};

export default Update;
