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
    title: "Cards",
    icon: <FontAwesomeIcon icon={faBuilding} />,
    link: "/cards",
  },
  {
    title: "Gallery",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    link: "/gallery",
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
