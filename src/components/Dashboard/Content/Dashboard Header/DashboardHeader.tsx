import { useState } from "react";
import "./dashboardHeader.css";
import { BsGrid3X2 } from "react-icons/bs";
import { MdOutlineViewList } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import FolderDropDow from "../../../common/DropDown/Container/FolderDropDown/FolderDropDown";
import GetIcon from "../../../common/Icons/GetIcon";
import React from "react";


interface Props {
  currentPath: string[];
  currentDashboard: string;
  handleFolderClick: (path: string, index: number) => void;
}

const DashboardHeader = ({ currentDashboard, currentPath, handleFolderClick }: Props) => {
  const [gridLayout, setGridLayout] = useState(true);

  return (
    <div className="dashboard-header">
      {currentDashboard === "My Drive" ? (
        <div className="dashboard-filepath">
          {currentPath.map((path, index) => (
            <React.Fragment key={path + index}>
              {currentPath.length - 1 !== index ?
                <>
                  <div className="dashboard-previous-folder">
                    <span className="dashboard-title" onClick={() => handleFolderClick(path, index)}>{path}</span>
                  </div>
                  <GetIcon className="dashboard-pathArrow" iconType="pathArrow" iconSize={18} />
                </> :
                <FolderDropDow
                  contentClassName="dashboard-content"
                  folderName={path}
                  className="filepath-name"
                  currentFolder={true}
                />}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="dashboard-title-container">
          <span className="dashboard-title">{currentDashboard}</span>
        </div>
      )}
      <div className="dashboard-settings">
        <div
          className="dashboard-data-layout"
          onClick={() => setGridLayout(!gridLayout)}
        >
          {gridLayout ? (
            <BsGrid3X2 className="dashboard-data-layout-icon" size={18} />
          ) : (
            <MdOutlineViewList
              className="dashboard-data-layout-icon"
              size={18}
            />
          )}
        </div>
        <div className="dashboard-data-info">
          <GrCircleInformation
            className="dashboard-data-layout-icon"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
