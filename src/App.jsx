import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex items-center">
          <li>
            <Link to="/" className="text-gray-300 p-2 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 p-2 hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

function HomePage() {
  return <h1 className="text-4xl">Home</h1>;
}

function AboutPage() {
  return <h1 className="text-4xl">About</h1>;
}

export default App;
