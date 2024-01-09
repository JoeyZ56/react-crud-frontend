import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/CrudOperations/ListUser";
import CreateUser from "./components/CrudOperations/CreateUser";
import EditUser from "./components/CrudOperations/EditUser";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h2>React CRUD operations using PHP API and MYSQL</h2>
      </header>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
            <li>
              <Link to="user/:id/edit">Edit User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
