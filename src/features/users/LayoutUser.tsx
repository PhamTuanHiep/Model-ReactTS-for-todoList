import { Outlet, Link } from "react-router-dom";
export default function LayoutUser() {
    return (
      <div>
        <h1>These are Users</h1>
        <Outlet></Outlet>
        {/* <ul>
            <li>
            <Link to={`create`}>Create</Link>
            </li>
            <li>
            <Link to={`edit`}>Edit</Link>
            </li>
            <li>
            <Link to={`list`}>List</Link>
            </li>
            
        </ul> */}
      </div>
    );
  }