import { useEffect, useRef } from "react";
import "./Menu.css";
import GetIcon from "../../../Icons/GetIcon";

export interface MenuItemProps {
  iconType: string;
  iconText: string;
}

interface Props {
  items: MenuItemProps[];
  listVisible: boolean;
}

const Menu = ({ items, listVisible }: Props) => {
  const menuRef = useRef(document.createElement("div"));

  useEffect(() => {
    const listClasses = menuRef.current.classList;
    if (listVisible) listClasses.replace("menu-hidden", "menu-visible");
    else listClasses.replace("menu-visible", "menu-hidden");
  }, [listVisible]);

  return (
    <div className="menu menu-hidden" ref={menuRef}>
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
