import Header from "./Components/Header/Header";
import { About } from "./Pages/About/About";
import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="*"
            element={
              <div>
                <h1 style={{ color: "red" }}>Page not found 404</h1>
              </div>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
