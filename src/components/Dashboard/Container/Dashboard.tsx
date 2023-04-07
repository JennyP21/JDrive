import DashboardHeader from "../Content/Dashboard Header/DashboardHeader";
import FileTable from "../Content/FileTable/FileTable";
import Suggestions from "../Content/Suggestions/Suggestions";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <Suggestions />
      <FileTable />
    </div>
  );
};

export default Dashboard;
