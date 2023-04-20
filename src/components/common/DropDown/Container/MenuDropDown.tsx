import "./dropDown.css";
import { useEffect, useState } from "react";
import GetIcon from "../../Icons/GetIcon";
import Menu, { MenuItemProps } from "../Content/MenuList/Menu";
import useItemVisibility from "../../../hooks/useItemVisibility";

interface Props {
  items: MenuItemProps[];
  iconSize: number;
  iconType: string;
}

const DropDownContainer = ({ items, iconSize, iconType }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    targetClassName: "dropdown-menu",
  });

  return (
    <div className="dropdown">
      <GetIcon
        className="dropdown-icon dropdown-menu"
        iconType={iconType}
        iconSize={iconSize}
        onClick={() => setItemVisibility(!itemVisibility)}
      />
      <Menu listVisible={itemVisibility} items={items} />
    </div>
  );
};

export default DropDownContainer;
