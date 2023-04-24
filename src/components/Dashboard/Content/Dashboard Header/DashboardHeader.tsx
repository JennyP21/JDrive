import { useState } from "react";
import "./dashboardHeader.css";
import { BsGrid3X2 } from "react-icons/bs";
import { MdOutlineViewList } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import FolderDropDow from "../../../common/DropDown/Container/FolderDropDown/FolderDropDown";


interface Props {
  currentDashboard: string;
}

const DashboardHeader = ({ currentDashboard }: Props) => {
  const [gridLayout, setGridLayout] = useState(true);

  return (
    <div className="dashboard-header">
      {currentDashboard === "My Drive" ? (
        <div className="dashboard-filepath">
          <FolderDropDow
            contentClassName="dashboard-content"
            folderName={currentDashboard}
            className="filepath-name"
          />
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
