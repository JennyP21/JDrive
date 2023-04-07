import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Dashboard from "./components/Dashboard/Container/Dashboard";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <LeftPanel />
      <Dashboard />
    </div>
  );
};

export default App;
