import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Welcome to the Dashboard Area</h1>
      <nav>
        <a href="/dashboard">Dashboard</a> | <a href="/dashboard/dashboard1">Dashboard 1</a>
      </nav>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
