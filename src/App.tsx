import "./App.css";
import Navbar from "./components/Navbar/Container/Navbar";
import LeftPanel, { LeftPanelProps } from "./components/LeftPanel/LeftPanel";
import Dashboard from "./components/Dashboard/Container/Dashboard";
import { useState } from "react";

const App = () => {

  const [leftPanelItems, setLeftPanelItems] = useState([
    {
      id: 1,
      iconType: "drive",
      itemText: "My Drive",
      expandable: true,
      selected: true,
    },
    {
      id: 2,
      iconType: "computer",
      itemText: "Computers",
      expandable: true,
      selected: false,
    },
    {
      id: 3,
      iconType: "share",
      itemText: "Shared with me",
      expandable: false,
      selected: false,
    },
    {
      id: 4,
      iconType: "history",
      itemText: "Recent",
      expandable: false,
      selected: false,
    },
    {
      id: 5,
      iconType: "starEmpty",
      itemText: "Starred",
      expandable: false,
      selected: false,
    },
    {
      id: 6,
      iconType: "trash",
      itemText: "Trash",
      expandable: false,
      selected: false,
    },
    {
      id: 7,
      iconType: "cloud",
      itemText: "Storage",
      expandable: false,
      selected: false,
    },
  ]);

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
    <div className="main">
      <Navbar />
      <LeftPanel
        iconSize={18}
        onSelect={handleSelect}
        leftPanelItems={leftPanelItems}
      />
      <Dashboard currentDashboard={currentDashboard} />
    </div>
  );
};

export default App;
