import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import BookTicket from "./components/BookTicket";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        {!token && <Route path="/register" element={<Register />} />}
        {!token && <Route path="/login" element={<Login setToken={setToken} />} />}

        {/* Protected Pages */}
        {token && <Route path="/book" element={<BookTicket />} />}

        {/* Payment Result Pages */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
