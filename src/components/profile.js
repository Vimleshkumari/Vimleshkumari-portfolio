import React, { useState, useEffect } from "react";
import "./profile.css";
import { FaNodeJs } from "react-icons/fa";

const Header = ({ onMenuClick }) => (
    <header className="profile-header">
        <button className="hamburger" onClick={onMenuClick} aria-label="Open menu">
            <span />
            <span />
            <span />
        </button>
        {/* <h1>Vimlesh Kumari</h1> */}
    </header>
);

const Footer = () => (
    <footer className="profile-footer">
        <p>&copy; 2025 Vimlesh Kumari. All rights reserved.</p>
    </footer>
);

const SidePanel = ({ open, onClose }) => (
    <aside className={`profile-sidepanel${open ? " open" : ""}`}>
        <div style={{
            marginTop: '20px'
        }}>
            <button className="close-btn" onClick={onClose} aria-label="Close menu">&times;</button>
            <ul>
                <li>About</li>
                <li> <a href="https://github.com/Vimleshkumari" target="/">Projects</a></li>
                <li>Contact</li>
            </ul>
        </div>
    </aside>
);

const statements = [
    "A Frontend Engineer",
    "I am a passionate developer.",
    "I love building responsive web apps.",
    "Let's connect and collaborate!"
];

const Profile = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const [currentStatement, setCurrentStatement] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    const handleMenuClick = () => setSideOpen(true);
    const handleClose = () => setSideOpen(false);

    useEffect(() => {
        if (charIndex < statements[currentStatement].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + statements[currentStatement][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            // Pause before next statement, then loop
            const timeout = setTimeout(() => {
                setCurrentStatement((prev) => (prev + 1) % statements.length);
                setDisplayedText("");
                setCharIndex(0);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, currentStatement]);

    return (
        <div className="profile-container">
            <Header onMenuClick={handleMenuClick} />
            <div className="profile-main">
                <SidePanel open={sideOpen} onClose={handleClose} />
                <main className="profile-body" onClick={sideOpen ? handleClose : undefined}>
                    <FaNodeJs className="profile-js-icon-top" />
                    <div className="center-content">
                        <div className="welcome-col">
                            <div className="welcome-box">
                                WELCOME
                            </div>
                        </div>
                        <div className="typewriter">
                            <span>{displayedText}</span>
                            <span className="type-cursor">|</span>
                        </div>
                        <div className="profile-buttons">
                            <button>
                                <a href="https://github.com/Vimleshkumari" target="/">View My Work</a>
                            </button>
                            <button>Contact Me</button>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;