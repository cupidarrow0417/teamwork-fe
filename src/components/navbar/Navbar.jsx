import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineBell } from "react-icons/ai";
import NavStyle, { PostsStyles } from "./nav.style";
import searchIcon from "../../Assets/images/iconSearch.svg";
import profile from "../../Assets/images/User Profile.png";
import Ham from "../../Assets/images/Ham.svg";
import Logo from "../../Assets/images/Logo.svg";
import MediumButton from "../buttons/MediumButton";
import GIF from "../../Assets/images/GIF.svg";
import cancel from "../../Assets/images/cancel.svg";
import useGeneralStore from "../../context/GeneralContext";

const Navbar = ({ toggleNav, hamRef }) => {
  const navigate = useNavigate();
  const [displayPosts, setDisplayPosts] = useState("none");
  const { currentPage } = useGeneralStore();

  const handleClick = () => {
    if (currentPage === "Employees") {
      navigate("/dashboard/employees/create");
    } else {
      setDisplayPosts("block");
    }
  };

  return (
    <NavStyle>
      <Link to="/">
        <div className="logoWrap">
          <img src={Logo} alt="logo" />
          <h2 className="brand-name">Logo</h2>
        </div>
      </Link>
      <div className="headWrap">
        <div className="head">
          <h1 className="title">{currentPage}</h1>
          <button id="ham" type="button" onClick={toggleNav} ref={hamRef}>
            <img src={Ham} alt="hamburger" />
          </button>
          <div className="search">
            <input
              type="text"
              placeholder="Input Search"
              className="searchInput"
            />
            <img src={searchIcon} id="searchIcon" alt="Search Icon" />
          </div>
          <div className="icons">
            <MediumButton
              Text={currentPage === "Employees" ? "Invite" : "New Post"}
              width="120px"
              bgColor="#1678F3"
              color="white"
              className="create"
              onClick={handleClick}
            />
            <a href="/" className="bell">
              <AiOutlineBell />
            </a>
            <div className="profile">
              <a href="/">
                <img src={profile} alt="Profile" />
              </a>
              <div className="admin">
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#1F2937"
                  }}
                >
                  Temitayo A.
                </p>
                <p>@Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HTML Template for the overlay */}
      <PostsStyles displayPosts={displayPosts}>
        <section className="chooseSection">
          <h2>Choose content type...</h2>
          <div className="chooseButtons">
            <button
              type="button"
              className="choose"
              onClick={() => {
                navigate("posts/gif");
                setDisplayPosts("none");
              }}
            >
              <img src={GIF} alt="" />
              <p>Post GIF</p>
            </button>
            <button
              type="button"
              className="choose"
              onClick={() => {
                navigate("posts/article");
                setDisplayPosts("none");
              }}
            >
              <img src={GIF} alt="" />
              <p>Post Article</p>
            </button>
          </div>
          <button
            className="cancel"
            type="button"
            onClick={() => setDisplayPosts("none")}
          >
            <img src={cancel} alt="" />
          </button>
        </section>
      </PostsStyles>
    </NavStyle>
  );
};

Navbar.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  hamRef: PropTypes.string.isRequired
};

export default Navbar;
