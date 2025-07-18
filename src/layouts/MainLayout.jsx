

import { NavLink, Outlet } from 'react-router-dom';
import devsum from "../assets/Images/devsum.jpeg";
import admin from "../assets/Images/Admin.png"

function MainLayout() {
  const activeClass =
    'block text-primary font-semibold bg-neutral-200 px-4 py-2 rounded';
  const normalClass =
    'block text-gray-700 hover:bg-neutral-100 px-4 py-2 rounded transition';

  return (
    <div className="flex min-h-screen font-inter">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">InternHub</h1>
        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/candidates"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Candidates
          </NavLink>
          <NavLink
            to="/dashboard/internships"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Internships
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Profile
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-neutral-100 p-6">
        <header className="flex justify-end items-center mb-4">
          <img
            src={devsum}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          {/* <span>Admin</span> */}
          <img src={admin} alt="" className="w-10 h-10 rounded-full mr-2" />
        </header>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
