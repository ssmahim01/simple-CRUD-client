import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/users">
        <button
          style={{
            backgroundColor: "blueviolet",
            color: "white",
          }}
        >
          Users
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
