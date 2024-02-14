import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Home>
              <Routes>
                <Route path="/" element={<Navbar />} />
              </Routes>
            </Home>
          }
        />
      </Routes>
    </>
  );
}

export default App;
