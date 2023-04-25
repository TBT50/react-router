import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
