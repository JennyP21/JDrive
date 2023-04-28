import { useEffect, useState } from "react";
import Computers from "../Content/Computers/Computers";
import DashboardHeader, { FolderProps } from "../Content/Dashboard Header/DashboardHeader";
import MyDrive from "../Content/My Drive/MyDrive";
import Recent from "../Content/Recent/Recent";
import Shared from "../Content/Shared/Shared";
import Starred from "../Content/Starred/Starred";
import Storage from "../Content/Storage/Storage";
import Trash from "../Content/Trash/Trash";
import Path from "../Content/Path/Path";
import "./dashboard.css";
import { getRootFolder } from "../../../services/folderService";


interface Props {
  currentDashboard: string;
  setCurrentDashboard: (dashboard: string) => void;
}

const Dashboard = ({ currentDashboard }: Props) => {
  type ContentType = typeof MyDrive | typeof Path;
  const contentMapping: { [key: string]: ContentType } = {
    "My Drive": MyDrive,
    "Computers": Computers,
    "Shared with me": Shared,
    "Recent": Recent,
    "Starred": Starred,
    "Trash": Trash,
    "Storage": Storage,
    "Path": Path,
  }
  const Content = contentMapping[currentDashboard];

  const [currentPath, setCurrentPath] = useState<FolderProps[]>([]);
  useEffect(() => {
    const data = async () => {
      return await getRootFolder().then(rootFolder => {
        const root = rootFolder[0];
        setCurrentPath([{ ...root, name: "My Drive" }])
      });
    }
    data()
  }, [])

  const handleFolderClick = (index: number) => {
    const newPath = currentPath.splice(0, index + 1);
    setCurrentPath(newPath);
  };

  return (
    <div className="dashboard">
      <DashboardHeader handleFolderClick={handleFolderClick} currentPath={currentPath} currentDashboard={currentDashboard} />
      <Content currentPath={currentPath} />
    </div>
  );
};

export default Dashboard;
