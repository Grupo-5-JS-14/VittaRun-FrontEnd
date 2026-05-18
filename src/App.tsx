import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="min-h-screen bg-linear-to-br from-[#f4f7f2] via-[#eef7f4] to-[#eef4ff]">
            
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
