import FileTable from "./FileTable/FileTable";
import Suggestions from "../../../common/Suggestions/Suggestions";
import "./myDrive.css";

const MyDrive = () => {
  const files = [
    {
      fileName: "Shared Files",
      fileType: "folder",
      owner: "Jenny",
      lastModified: "18 Dec 2021",
      fileSize: "-",
    },
    {
      fileName: "Bills",
      fileType: "pdf",
      owner: "Jenny",
      lastModified: "5 Nov 2022",
      fileSize: "-",
    },
    {
      fileName: "Resume",
      fileType: "document",
      owner: "Jenny",
      lastModified: "1 Jan 2023",
      fileSize: "-",
    },
  ];

  const suggestedFiles = [
    {
      fileName: "Final presentation  2023",
      fileType: "pdf",
      activity: "You modified this file yesterday",
    },
    {
      fileName: "Bills",
      fileType: "pdf",
      activity: "You created this file this morning",
    },
    {
      fileName: "Resume",
      fileType: "document",
      activity: "You modified this file Last Week",
    },
  ];

  return (
    <div className="my-drive">
      <Suggestions suggestedFiles={suggestedFiles} />
      <FileTable files={files} />
    </div>
  );
};

export default MyDrive;
