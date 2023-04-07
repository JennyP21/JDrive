import "./App.css";
import Navbar from "./components/Navbar/Container/Navbar";
import LeftPanel from "./components/LeftPanel/Container/LeftPanel";
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
