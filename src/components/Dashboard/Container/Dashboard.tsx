import DashboardHeader from "../Content/Dashboard Header/DashboardHeader";
import MyDrive from "../Content/My Drive/MyDrive";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <MyDrive />
    </div>
  );
};

export default Dashboard;
