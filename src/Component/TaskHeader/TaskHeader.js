import { NavLink } from "react-router-dom";

function TaskHeader() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white font-serif">IWCN Task</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" activeClassName="text-gray-300">
                Task 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/task2" activeClassName="text-gray-300">
                Task 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/task3" activeClassName="text-gray-300">
                Task 3
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default TaskHeader;
