import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/listcar"}>List Car</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contactus"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
