import "./App.css";
import Navbar from "./components/Navbar/Container/Navbar";
import LeftPanel, { LeftPanelProps } from "./components/LeftPanel/LeftPanel";
import Dashboard from "./components/Dashboard/Container/Dashboard";
import { useState } from "react";
import { dashboards } from "./data";
import FolderDropDown from "./components/common/DropDown/Container/FolderDropDown/FolderDropDown";
import FolderList from "./components/common/DropDown/Content/FolderList/FolderList";

const App = () => {

  const [leftPanelItems, setLeftPanelItems] = useState(dashboards);

  const [currentDashboard, setCurrentDashboard] = useState("My Drive");

  const handleSelect = (leftPanelItem: LeftPanelProps) => {
    let newLeftPanelItems = leftPanelItems.map((item) =>
      item.id === leftPanelItem.id
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
    setLeftPanelItems(newLeftPanelItems);
    setCurrentDashboard(leftPanelItem.itemText);
  };

  return (
    <div className="">
      {/* <Navbar />
      <LeftPanel
        iconSize={18}
        onSelect={handleSelect}
        leftPanelItems={leftPanelItems}
      />
      <Dashboard currentDashboard={currentDashboard} setCurrentDashboard={setCurrentDashboard} /> */}
      <FolderList />
    </div>
  );
};

export default App;
