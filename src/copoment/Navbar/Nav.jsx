import { Link, NavLink } from "react-router-dom";


const Nav = () => {
  const link= <>
  <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/favorite'>Favorite</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
  </>
    return (
        < >
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className=" text-xl  font-extrabold">Phone Shop</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
</div>
        </>
    );
};

export default Nav;