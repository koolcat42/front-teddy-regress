import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Eda from "./pages/Eda";
import Train from "./pages/Train";
import Test from "./pages/Test";
import ChatbotUI from "./pages/ChatbotUI";
import MainLayout from "./pages/MainLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Main app routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/eda" element={<Eda />} />
        <Route path="/train" element={<Train />} />
        <Route path="/test" element={<Test />} />
      </Route>

      {/* Chatbot route with its own layout */}
      <Route>
        <Route path="/chat" element={<ChatbotUI />} />
      </Route>
    </Routes>
  );
}

export default App;
