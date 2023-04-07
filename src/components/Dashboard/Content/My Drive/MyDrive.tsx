import FileTable from "./FileTable/FileTable";
import Suggestions from "./Suggestions/Suggestions";
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

  return (
    <div className="my-drive">
      <Suggestions />
      <FileTable files={files} />
    </div>
  );
};

export default MyDrive;
