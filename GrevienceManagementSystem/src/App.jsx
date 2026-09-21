import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/login";
import Registration from "./pages/Registration/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Registration />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;