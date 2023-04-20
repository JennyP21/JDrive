import { useState } from "react";
import GetIcon from "../../../Icons/GetIcon";
import FolderList, {
  FolderListProps,
} from "../../Content/FolderList/FolderList";
import "./folderDropDown.css";
import useItemVisibility from "../../../../hooks/useItemVisibility";

interface Props {
  className: string;
  items: FolderListProps[][];
  folderName: string;
}

const FolderDropDow = ({ items, folderName, className }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    targetClassName: className,
  });

  return (
    <div className="folder-dropdown">
      <div
        className={className}
        onClick={() => setItemVisibility(!itemVisibility)}
      >
        <span className="dashboard-title">{folderName}</span>
        <GetIcon
          className="dashboard-arrow"
          iconSize={18}
          iconType="triangleDown"
        />
      </div>
      <FolderList listVisible={itemVisibility} items={items} />
    </div>
  );
};

export default FolderDropDow;
