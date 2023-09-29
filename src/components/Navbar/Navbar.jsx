import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
