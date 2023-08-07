import { useState } from "react";
import GetIcon from "../../../Icons/GetIcon";
import FolderList from "../../Content/FolderList/FolderList";
import useItemVisibility from "../../../../hooks/useItemVisibility";
import "./folderDropDown.css";

interface Props {
  className: string;
  contentClassName: string;
  folderName: string;
  currentFolder?: boolean;
}

const FolderDropDown = ({ folderName, className, contentClassName, currentFolder = false }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    containerClassName: className,
    contentClassname: contentClassName
  });

  return (
    <div className="folder-dropdown">
      <div
        className={className}
        onClick={() => setItemVisibility(!itemVisibility)}
      >
        <span className="dashboard-title">{folderName}</span>
        {currentFolder &&
          <GetIcon
            className="dashboard-arrow"
            iconSize={18}
            iconType="triangleDown"
          />
        }
      </div>
      {currentFolder && <FolderList contentClassName={contentClassName} listVisible={itemVisibility} />}
    </div>
  );
};

export default FolderDropDown;
