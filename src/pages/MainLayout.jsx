// MainLayout.jsx
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* renders nested routes */}
      </div>
    </div>
  );
}
