import { useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { FiGrid } from "react-icons/fi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import {
  MdOutlineContentPaste,
  MdOutlineClass,
  MdOutlineReport,
  MdHelpOutline,
  MdOutlineSettings,
  MdLogout
} from "react-icons/md";

import SideBarStyles from "./sideBar.styles";
import GeneralStore from "../../utils/context/GeneralContext";

const SideBar = () => {
  // const [currentPage, setCurrentPage] = useState("Home");
  const { currentPage, setCurrentPage } = GeneralStore();

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage, setCurrentPage]);

  const ITEMS = [
    { title: "Home", icon: <FiGrid />, link: "/dashboard/home" },
    {
      title: "Employees",
      icon: <IoPeopleCircleOutline />,
      link: "/dashboard/employees"
    },
    {
      title: "Posts",
      icon: <MdOutlineContentPaste />,
      link: "/dashboard/posts"
    },
    {
      title: "Categories",
      icon: <MdOutlineClass />,
      link: "/dashboard/categories"
    },
    { title: "Reports", icon: <MdOutlineReport />, link: "/dashboard/reports" },
    { title: "Help", icon: <MdHelpOutline />, link: "/dashboard/help" },
    {
      title: "Settings",
      icon: <MdOutlineSettings />,
      link: "/dashboard/settings"
    }
  ];

  const handleClick = (title) => {
    setCurrentPage(title);
  };

  return (
    <SideBarStyles>
      <div>
        {ITEMS.slice(0, 6).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div className={currentPage === title ? "currentPage item" : "item"}>
              {icon}
              <li>{title}</li>
            </div>
          </Link>
        ))}
      </div>

      <div className="second-list">
        {ITEMS.slice(6).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div className={currentPage === title ? "currentPage item" : "item"}>
              {icon}
              <li>{title}</li>
            </div>
          </Link>
        ))}
        <Link to="/login">
          <div className="item">
            <MdLogout />
            <li>Logout</li>
          </div>
        </Link>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
