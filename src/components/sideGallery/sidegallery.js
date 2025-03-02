import React, { useState } from "react";
import "./sidegallery.css"; // Import CSS for styling
import artist1 from "../../../src/assets/images/img_1.png";
import artist2 from "../../../src/assets/images/img_2.png";
import artist3 from "../../../src/assets/images/img_3.png";
import artist4 from "../../../src/assets/images/img_4.png";

const RightSection = () => {
  const [activeTab, setActiveTab] = useState("Artists");

  // Sample images (replace with actual image URLs)
  const artistImages = [artist1, artist2, artist3, artist4];

  return (
    <div className="right-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "Artists" ? "active" : ""}
          onClick={() => setActiveTab("Artists")}
        >
          Artists
        </button>
        <button
          className={activeTab === "Photographers" ? "active" : ""}
          onClick={() => setActiveTab("Photographers")}
        >
          Photographers
        </button>
      </div>

      {/* Image Scroller */}
      <div className="image-scroller">
        {activeTab === "Artists" &&
          artistImages.map((image, index) => (
            <img key={index} src={image} alt="Artist" className="image-item" />
          ))}
      </div>
    </div>
  );
};

export default RightSection;
