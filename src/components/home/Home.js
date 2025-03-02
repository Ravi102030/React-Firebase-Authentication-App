import "./home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import RightSection from "../sideGallery/sidegallery";
import PostContainer from "../postcontainer/PostContainer";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-section">
          <div className="scrollable-posts">
            <PostContainer/>
          </div>
        </div>

        <RightSection />
      </div>
    </div>
  );
};

export default Home;
