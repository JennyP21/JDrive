import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <LeftPanel />
      <Content />
    </div>
  );
};

export default App;
