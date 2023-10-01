import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Movies from "./pages/Movies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
