import { Link } from "react-router-dom";

import { Layout } from "./Layout";

export const Header = () => {
  return (
    <nav className="bg-primary-yellow py-6 px-2">
      <Layout>
        <ul className="flex items-center justify-end max-w-7xl mx-auto">
          <li className="mr-auto">
            <Link
              to="/"
              className="text-[#4D4D4D] text-2xl font-black hover:text-gray-600"
            >
              #VANLIFE
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#4D4D4D] text-base p-2 hover:text-gray-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/vans"
              className="text-[#4D4D4D] text-base p-2 hover:text-gray-600"
            >
              Vans
            </Link>
          </li>
        </ul>
      </Layout>
    </nav>
  );
};
