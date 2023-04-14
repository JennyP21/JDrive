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
  return (
    <div className="dashboard">
      <DashboardHeader items={items} />
      {currentDashboard === "My Drive" ? <MyDrive /> :
      <Shared />}
    </div>
  );
};

export default Dashboard;
