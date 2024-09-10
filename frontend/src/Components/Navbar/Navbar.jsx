// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Add your styling here

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="/smarterTask.png" alt="Logo" /> {/* Add your logo image */}
//         <h2>TaskMinder</h2>
//       </div>
//       <div className="links">
//         <Link to="/projects" className="nav-link">Projects</Link>
//         <Link to="/members" className="nav-link">Members</Link>
//       </div>
//       <div className="toggle-and-profile">
//         <div className="toggle-switch">
//           Add your toggle switch code here
//         </div>
//         <div className="profile-icon">
//           <i className="fas fa-user"></i> {/* Add your profile icon */}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Add your styling here

// const Navbar = () => {
//   const handleLogout = () => {
//     // Implement your logout functionality here
//     console.log('Logged out');
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="/smarterTask.png" alt="Logo" /> {/* Add your logo image */}
//         <h2>TaskMinder</h2>
//       </div>
//       <div className="links">
//         <Link to="/projects" className="nav-link">Projects</Link>
//         <Link to="/members" className="nav-link">Members</Link>
//       </div>
//       <div className="toggle-and-profile">
//         <button className="toggle-switch">
//           {/* Add toggle switch functionality */}
//           Toggle
//         </button>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//         <div className="profile-icon">
//           <i className="fas fa-user"></i> {/* Add your profile icon */}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your styling here

const Navbar = () => {
  const handleLogout = () => {
    // Implement your logout functionality here
    console.log('Logged out');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/smarterTask.png" alt="Logo" /> {/* Add your logo image */}
        <h2>TaskMinder</h2>
      </div>
      <div className="links">
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/members" className="nav-link">Members</Link>
      </div>
      <div className="toggle-and-profile">
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <div className="profile-icon">
        <Link to="/toggle" className="profile-icon">

          <i className="fas fa-user"></i> {/* Add your profile icon */}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


