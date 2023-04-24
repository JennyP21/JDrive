import Computers from "../Content/Computers/Computers";
import DashboardHeader from "../Content/Dashboard Header/DashboardHeader";
import MyDrive from "../Content/My Drive/MyDrive";
import Recent from "../Content/Recent/Recent";
import Shared from "../Content/Shared/Shared";
import Starred from "../Content/Starred/Starred";
import Storage from "../Content/Storage/Storage";
import Trash from "../Content/Trash/Trash";
import "./dashboard.css";

interface Props {
  currentDashboard: string;
}

const Dashboard = ({ currentDashboard }: Props) => {
  type ContentType = typeof MyDrive;
  const contentMapping: { [key: string]: ContentType } = {
    "My Drive": MyDrive,
    "Computers": Computers,
    "Shared with me": Shared,
    "Recent": Recent,
    "Starred": Starred,
    "Trash": Trash,
    "Storage": Storage,
  }

  const Content = contentMapping[currentDashboard];

  return (
    <div className="dashboard">
      <DashboardHeader currentDashboard={currentDashboard} />
      <Content />
    </div>
  );
};

export default Dashboard;
