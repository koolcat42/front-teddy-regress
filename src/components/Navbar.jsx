import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "⏪" : "⏩"}
      </button>

      <nav>
        <Link to="/" className="nav-link">
          {isOpen ? "🏠 Home" : "🏠"}
        </Link>
        <Link to="/eda" className="nav-link">
          {isOpen ? "📊 EDA" : "📊"}
        </Link>
        <Link to="/train" className="nav-link">
          {isOpen ? "⚙️ Train" : "⚙️"}
        </Link>
        <Link to="/test" className="nav-link">
          {isOpen ? "🧪 Test" : "🧪"}
        </Link>
      </nav>
    </div>
  );
}
