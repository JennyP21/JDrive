import "./dropDown.css";
import { useState } from "react";
import GetIcon from "../../Icons/GetIcon";
import Menu, { MenuItemProps } from "../Content/MenuList/Menu";

interface Props {
  items: MenuItemProps[];
  iconSize: number;
  iconType: string;
}

const DropDownContainer = ({ items, iconSize, iconType }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  return (
    <div className="dropdown">
      <GetIcon
        className="dropdown-icon"
        iconType={iconType}
        iconSize={iconSize}
        onClick={() => setItemVisibility(!itemVisibility)}
      />
      <Menu listVisible={itemVisibility} items={items} />
    </div>
  );
};

export default DropDownContainer;
