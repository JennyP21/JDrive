import "./dropDown.css";
import { useEffect, useState } from "react";
import GetIcon from "../../Icons/GetIcon";
import DropDownContent from "./DropDownContent";
import useItemVisibility from "../../../hooks/useItemVisibility";

interface Props {
  items: string[];
  iconSize: number;
  dataType: "options" | "settings" | "menu" | "help" | "profile";
  iconType: "options" | "settings" | "menu" | "help" | "profile";
}

const DropDownContainer = ({ items, iconSize, iconType, dataType }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    targetClassName: "dropdown-icon",
  });

  return (
    <div className="dropdown">
      <GetIcon
        className="dropdown-icon"
        iconType={iconType}
        iconSize={iconSize}
        onClick={() => {
          setItemVisibility(!itemVisibility);
        }}
      />
      <DropDownContent
        items={items}
        itemVisibility={itemVisibility}
        dataType={dataType}
      />
    </div>
  );
};

export default DropDownContainer;
