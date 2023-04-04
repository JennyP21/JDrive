import "./dropDown.css";
import { useState } from "react";
import GetIcon from "../../Icons/GetIcon";
import Profile from "../Content/Profile/Profile";

interface Props {
  iconSize: number;
  iconType: string;
}

const DropDownContainer = ({ iconSize, iconType }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  return (
    <div className="dropdown">
      <GetIcon
        className="dropdown-icon"
        iconType={iconType}
        iconSize={iconSize}
        onClick={() => setItemVisibility(!itemVisibility)}
      />
      <Profile listVisible={itemVisibility} />
    </div>
  );
};

export default DropDownContainer;
