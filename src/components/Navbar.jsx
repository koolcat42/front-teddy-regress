import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className={`toggle-btn ${isOpen? "open-btn": "close-btn"}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>

      <nav>
        <Link to="/" className="nav-link">
          <span role="img" aria-label="home">🏠</span>
          {isOpen && "Home"}
        </Link>
        <Link to="/eda" className="nav-link">
        
          <span role="img" aria-label="eda">📊</span>
          {isOpen && "EDA"}
        </Link>
        <Link to="/train" className="nav-link">
          <span role="img" aria-label="train">⚙️</span>
          {isOpen && "Train"}
        </Link>
        <Link to="/test" className="nav-link">
          <span role="img" aria-label="test">🧪</span>
          {isOpen && "Test"}
        </Link>
        <Link to="/chat" className="nav-link">
          <span role="img" aria-label="chat">🗣️</span>
          {isOpen && "Chat"}
        </Link>
        
      </nav>
    </div>
  );
}
