import { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Ensure you create this CSS file

const LandingPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Children’s Sunday School</span></h1>
          <p>Fun, learning, and faith-building experiences for kids of all ages!</p>
          <Link 
            to="/role-selection" 
            className={`cta-button ${hovered ? "glow" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section id="about" className="features">
        <div className="feature">
          <h2>🎨 Engaging Activities</h2>
          <p>Interactive games, Bible stories, and creative crafts.</p>
        </div>
        <div className="feature">
          <h2>📚 Online Learning</h2>
          <p>Kuza (12-13 years) students can access study materials.</p>
        </div>
        <div className="feature">
          <h2>🎵 Worship & Music</h2>
          <p>Sing along and learn worship songs that inspire faith.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Sunday School. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
