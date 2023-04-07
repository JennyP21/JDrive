import { useState } from "react";
import "./dashboardHeader.css";
import { BsGrid3X2 } from "react-icons/bs";
import { MdOutlineViewList } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import { RxTriangleDown } from "react-icons/rx";

const DashboardHeader = () => {
  const [gridLayout, setGridLayout] = useState(true);

  return (
    <div className="dashboard-header">
      <div className="dashboard-filepath">
        <div className="filepath-name">
          <span>My Drive</span>
          <RxTriangleDown size={18} className="filepath-icon" />
        </div>
      </div>
      <div className="dashboard-settings">
        <div
          className="dashboard-data-layout"
          onClick={() => setGridLayout(!gridLayout)}
        >
          {gridLayout ? (
            <BsGrid3X2 className="dashboard-data-layout-icon" size={20} />
          ) : (
            <MdOutlineViewList
              className="dashboard-data-layout-icon"
              size={20}
            />
          )}
        </div>
        <div className="dashboard-data-info">
          <GrCircleInformation
            className="dashboard-data-layout-icon"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
