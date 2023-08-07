import { useRef } from "react";
import GetIcon from "../../../Icons/GetIcon";
import "./Menu.css";

const items = [
  { iconType: "profile", iconText: "Account" },
  { iconType: "google", iconText: "Search" },
  { iconType: "navigation", iconText: "Maps" },
  { iconType: "youtube", iconText: "YouTube" },
  { iconType: "googlePlay", iconText: "Play" },
  { iconType: "news", iconText: "News" },
  { iconType: "gmail", iconText: "Gmail" },
  { iconType: "meet", iconText: "Meet" },
  { iconType: "chat", iconText: "Chat" },
  { iconType: "contacts", iconText: "Contacts" },
  { iconType: "drive", iconText: "Drive" },
  { iconType: "calendar", iconText: "Calendar" },
  { iconType: "translate", iconText: "Translate" },
  { iconType: "photos", iconText: "Photos" },
  { iconType: "adCenter", iconText: "My Ad Center" },
  { iconType: "shopping", iconText: "Shopping" },
];

const Menu = () => {
  const menuRef = useRef(document.createElement("div"));

  return (
    <div className="menu" ref={menuRef}>
      {items.map((item) => (
        <div className="menu-item" key={item.iconText}>
          <GetIcon
            className="menu-item-icon"
            iconType={item.iconType}
            iconSize={35}
            onClick={() => null}
          />
          <p className="menu-item-text">{item.iconText}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
