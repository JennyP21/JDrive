import { FolderListProps } from "../../common/DropDown/Content/FolderList/FolderList";
import DashboardHeader from "../Content/Dashboard Header/DashboardHeader";
import MyDrive from "../Content/My Drive/MyDrive";
import Shared from "../Content/Shared/Shared";
import "./dashboard.css";

interface Props {
  items: FolderListProps[][];
  currentDashboard: string;
}

const Dashboard = ({ items, currentDashboard }: Props) => {
  type ContentType = typeof MyDrive;
  const contentMapping: {[key: string]: ContentType} = {
    "My Drive": MyDrive,
    "Shared with me": Shared,
  }

  const Content = contentMapping[currentDashboard];

  return (
    <div className="dashboard">
      <DashboardHeader currentDashboard={currentDashboard} items={items} />
      <Content />
    </div>
  );
};

export default Dashboard;
