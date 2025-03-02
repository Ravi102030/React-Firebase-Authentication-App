import React from "react";
import "./sidebar.css";
import { FaHome, FaBell, FaShoppingCart, FaComments, FaWallet, FaRegNewspaper, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom"; 


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <div className="menu-item">
          <FaHome className="menu-icon" />
          <span>Home</span>
        </div>
        <div className="menu-item">
          <FaBell className="menu-icon" />
          <span>Notifications</span>
        </div>
        <div className="menu-item">
          <FaShoppingCart className="menu-icon" />
          <span>Shop</span>
        </div>
        <div className="menu-item">
          <FaComments className="menu-icon" />
          <span>Conversation</span>
        </div>
        <div className="menu-item">
          <FaWallet className="menu-icon" />
          <span>Wallet</span>
        </div>
        <div className="menu-item">
          <FaRegNewspaper className="menu-icon" />
          <span>Subscription</span>
        </div>
        <div className="menu-item">
          <FaUser className="menu-icon" />
          <span>My Profile</span>
        </div>
      </div>

      <div className="logout-button" onClick={handleLogout}>
        <FiLogOut className="menu-icon"/>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
