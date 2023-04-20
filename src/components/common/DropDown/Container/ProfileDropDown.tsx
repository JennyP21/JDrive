import "./dropDown.css";
import { useEffect, useState } from "react";
import GetIcon from "../../Icons/GetIcon";
import Profile from "../Content/Profile/Profile";
import useItemVisibility from "../../../hooks/useItemVisibility";

interface Props {
  iconSize: number;
  iconType: string;
}

const DropDownContainer = ({ iconSize, iconType }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    targetClassName: "dropdown-profile",
  });

  return (
    <div className="dropdown">
      <GetIcon
        className="dropdown-icon dropdown-profile"
        iconType={iconType}
        iconSize={iconSize}
        onClick={() => setItemVisibility(!itemVisibility)}
      />
      <Profile listVisible={itemVisibility} />
    </div>
  );
};

export default DropDownContainer;
