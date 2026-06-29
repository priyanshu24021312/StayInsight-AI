import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AIAnalysis from "./pages/AIAnalysis";
import ReviewDetails from "./pages/ReviewDetails";
import ComponentDemo from "./pages/ComponentDemo";
import Toast from "./components/ui/Toast";

function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analysis" element={<AIAnalysis />} />
        <Route path="/review" element={<ReviewDetails />} />
        <Route path="/demo" element={<ComponentDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;