import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="bg-home-hero bg-no-repeat bg-cover px-4 py-12">
        <h1 className="text-white font-extrabold text-2xl mb-4">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white mb-6">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="text-white block bg-orange-400 text-center py-2"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
};
