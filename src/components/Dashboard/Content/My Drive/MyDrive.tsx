import FileTable from "./FileTable/FileTable";
import Suggestions from "./Suggestions/Suggestions";
import "./myDrive.css";

const MyDrive = () => {
  return (
    <div className="my-drive">
      <Suggestions />
      <FileTable />
    </div>
  );
};

export default MyDrive;
