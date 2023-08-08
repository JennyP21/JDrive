import { useState } from "react";
import GetIcon from "../../../Icons/GetIcon";
import DropDownContent from "../../Content/CommonDropDown/DropDownContent";
import useItemVisibility from "../../../../hooks/useItemVisibility";

interface Props {
  items: string[];
  iconSize: number;
  dataType: "settings" | "help";
  iconType: "options" | "settings" | "menu" | "help" | "profile";
  className: string;
  listClassName: string;
}

const DropDownContainer = ({ iconSize, iconType, dataType, className, listClassName }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    containerClassName: className,
    contentClassname: listClassName
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
        dataType={dataType}
        contentClassName={listClassName}
      />
    </div>
  );
};

export default DropDownContainer;
