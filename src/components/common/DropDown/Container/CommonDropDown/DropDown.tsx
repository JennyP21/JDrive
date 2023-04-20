import { useState } from "react";
import GetIcon from "../../../Icons/GetIcon";
import DropDownContent from "./DropDownContent";
import useItemVisibility from "../../../../hooks/useItemVisibility";

interface Props {
  items: string[];
  iconSize: number;
  dataType: "options" | "settings" | "menu" | "help" | "profile";
  iconType: "options" | "settings" | "menu" | "help" | "profile";
  className: string;
}

const DropDownContainer = ({ items, iconSize, iconType, dataType, className }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    targetClassName: className,
  });

  return (
    <div className="dropdown">
      <GetIcon
        className={"dropdown-icon " + className}
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
