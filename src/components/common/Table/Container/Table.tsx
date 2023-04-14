import TableBody from "../Content/TableBody/TableBody";
import TableHeader from "../Content/TableHeader/TableHeader";
import "./table.css";

export interface File {
  fileType: string;
  fileName: string;
  owner: string;
  lastModified: string;
  fileSize: string;
  SharedBy: string;
  ShareDate: string;
  TrashedDate: string;
  Location: string;
}

export interface FileTitles {
  Name: string;
  Owner: string;
  LastModified: string;
  FileSize: string;
  SharedBy: string;
  ShareDate: string;
  Location: string;
  TrashedDate: string;
  Menu: boolean;
}

interface Props {
  files: File[];
  titles: FileTitles[];
}

const Table = ({ files, titles }: Props) => {
  return (
    <div className="table">
      <TableHeader titles={titles} />
      <TableBody files={files} />
    </div>
  );
};

export default Table;
