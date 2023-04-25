import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
