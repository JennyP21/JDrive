import "./App.css";
import Navbar from "./components/Navbar/Container/Navbar";
import LeftPanel from "./components/LeftPanel/Container/LeftPanel";
import Dashboard from "./components/Dashboard/Container/Dashboard";

const App = () => {
  const items = ["New File", "File Upload", "Folder Upload"];

  return (
    <div className="main">
      <Navbar />
      <LeftPanel />
      <Dashboard items={items} />
    </div>
  );
};

export default App;
