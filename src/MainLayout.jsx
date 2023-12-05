import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <div>
        <h1>Library</h1>
      <div className="container nav">
        <NavLink to="/">Home</NavLink>|<NavLink to="/books">Books</NavLink>|
        <NavLink to="/add">Add</NavLink>|<NavLink to="/find">Find</NavLink>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
