import React, { useState } from "react";
import "./postcontainer.css";
import profileImg from "../../assets/images/profile_img_1.png";
import postImg from "../../assets/images/post_img_1.jpg";
import { FaHeart, FaRegCommentDots, FaShare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const PostContainer = () => {
  const [readMore, setReadMore] = useState(false);

  const post = {
    username: "Lara Leones",
    handle: "@thewallart",
    caption:
      "This is a beautiful piece of art that captures the essence of nature and its serenity. The vibrant colors and intricate details make it a masterpiece. #Nature #ArtLover #BeautifulPainting",
    image: postImg,
    likes: "9.7k",
    comments: "2.5k",
    shares: "1.2k",
  };

  return (
    <div className="post-container" style={{ marginTop: "20px" }}>
      {/* Top Section */}
      <div className="post-header">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <div className="post-user">
          <span className="username">{post.username}</span>
          <span className="handle">{post.handle}</span>
        </div>
        <BsThreeDotsVertical className="menu-icon" />
      </div>

      {/* Caption Section */}
      <div className="post-caption">
        {readMore ? post.caption : `${post.caption.substring(0, 100)}... `}
        <span className="read-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Read Less" : "Read More"}
        </span>
      </div>

      {/* Post Image */}
      <div className="post-image">
        <img src={post.image} alt="Post" />
      </div>

      {/* Post Actions */}
      <div className="post-actions">
        <div className="action">
          <FaHeart className="icon" />
          <span>{post.likes}</span>
        </div>
        <div className="action">
          <FaRegCommentDots className="icon" />
          <span>{post.comments}</span>
        </div>
        <div className="action">
          <FaShare className="icon" />
          <span>{post.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
