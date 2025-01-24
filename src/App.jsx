import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing.jsx";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
