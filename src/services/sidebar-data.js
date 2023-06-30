import {
  faHouse,
  faBuilding,
  faBullseye,
  faCalendar,
  faAddressCard,
  faPeopleGroup,
  faHandsHoldingCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sidebarData = [
  {
    title: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: "/",
  },
  {
    title: "About Us",
    icon: <FontAwesomeIcon icon={faBuilding} />,
    link: "/about-us",
  },
  {
    title: "Events",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    link: "/events",
  },
  {
    title: "Services",
    icon: <FontAwesomeIcon icon={faHandsHoldingCircle} />,
    link: "/",
  },
  {
    title: "Team",
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    link: "/",
  },
  {
    title: "Career",
    icon: <FontAwesomeIcon icon={faBullseye} />,
    link: "/",
  },
  {
    title: "Contact Us",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    link: "/",
  },
];
