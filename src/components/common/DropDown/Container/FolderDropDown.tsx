import "./dropDown.css";
import { useState } from "react";
import GetIcon from "../../Icons/GetIcon";
import FolderList from "../Content/FolderList/FolderList";

interface Props {
  className: string;
  items: string[];
  folderName: string;
}

const FolderDropDow = ({ items, folderName, className }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  return (
    <div className="dropdown">
      <div
        className={className}
        onClick={() => setItemVisibility(!itemVisibility)}
      >
        <span>{folderName}</span>
        <GetIcon
          className=""
          iconSize={18}
          iconType="triangleDown"
          onClick={() => null}
        />
      </div>
      <FolderList listVisible={itemVisibility} items={items} />
    </div>
  );
};

export default FolderDropDow;
