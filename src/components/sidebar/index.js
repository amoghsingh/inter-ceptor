import React, { useRef, useState, useEffect } from "react";
import { sidebarData } from "../../services/sidebar-data";
import { Link } from "react-router-dom";
import "./styles.scss";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={
          firstRender.current === true
            ? "sidebar-container"
            : isOpen === true
            ? "sb-open"
            : "sb-close"
        }
      >
        <div className="closebtn" onClick={() => handleSidebar()}>
          <FontAwesomeIcon icon={faXmark} style={{ color: "#dfe229" }} />
        </div>
        <ul>
          {sidebarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>
                  <div className="sb-icon">{item.icon}</div>
                  <div className="sb-title">{item.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-open-btn" onClick={() => handleSidebar()}>
        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fff" }} />
      </div>
    </>
  );
};

export default Sidebar;
