import { FolderListProps } from "../../common/DropDown/Content/FolderList/FolderList";
import DashboardHeader from "../Content/Dashboard Header/DashboardHeader";
import MyDrive from "../Content/My Drive/MyDrive";
import "./dashboard.css";

interface Props {
  items: FolderListProps[];
}

const Dashboard = ({ items }: Props) => {
  return (
    <div className="dashboard">
      <DashboardHeader items={items} />
      <MyDrive />
    </div>
  );
};

export default Dashboard;
