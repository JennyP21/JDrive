import { useRef } from "react";
import "./settings.css";

const Settings = () => {
  const listRef = useRef(document.createElement("ul"));

  return (
    <ul ref={listRef} className={"list"}>
      <li className="list-item">
        Settings
      </li>
      <li className="list-item">
        Get Drive for desktop
      </li>
      <li className="list-item">
        Keyboard shortcuts
      </li>
    </ul>
  );
};

export default Settings;
