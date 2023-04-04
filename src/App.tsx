import DropDown from "./components/common/DropDown/Container/DropDown";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AdvancedSearch from "./components/Navbar/Searchbar/AdvancedSearch";
import LeftPanel from "./components/LeftPanel/LeftPanel";

const App = () => {
  return (
    <>
      <Navbar />
      <LeftPanel />
    </>
  );
};

export default App;
