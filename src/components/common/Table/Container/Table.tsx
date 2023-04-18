import TableBody from "../Content/TableBody/TableBody";
import TableHeader from "../Content/TableHeader/TableHeader";
import "./table.css";

export interface File {
  fileType: string;
  fileName: string;
  owner?: string;
  lastModified?: string;
  fileSize?: string;
  SharedBy?: string;
  ShareDate?: string;
  TrashedDate?: string;
  Location?: string;
}

interface Props {
  files: File[];
  titles: string[];
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
