import { useState } from "react";
import GetIcon from "../../../Icons/GetIcon";
import FolderList, { FolderListProps } from "../../Content/FolderList/FolderList";
import "./folderDropDown.css";

interface Props {
  className: string;
  items: FolderListProps[];
  folderName: string;
}

const FolderDropDow = ({ items, folderName, className }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  return (
    <div className="folder-dropdown">
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
