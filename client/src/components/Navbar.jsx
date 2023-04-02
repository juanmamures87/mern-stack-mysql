/**Los Link son un remplazo a la etiqueta <a></a> */
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="bg-blue-800 flex justify-between px-20 py-4 text-white">
      <Link to={"/"}>
        <h1 className="text-4xl font-bold">REACT MYSQL</h1>
      </Link>
      <ul className="flex justify-around px-20 mr-10">
        <li className="mr-16 text-2xl">
          <Link to="/" className="bg-slate-300 rounded-sm text-black px-2 py-1">
            HOME
          </Link>
        </li>
        <li className="mr-20 mx-20 text-2xl">
          <Link
            to="/new"
            className="bg-slate-300 rounded-sm text-black px-2 py-1"
          >
            CREATE TASK
          </Link>
        </li>
      </ul>
    </div>
  );
};
