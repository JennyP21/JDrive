import TableBody from "../Content/TableBody/TableBody";
import TableHeader from "../Content/TableHeader/TableHeader";
import "./table.css";

export interface File {
  fileType: string;
  fileName: string;
  owner: string;
  lastModified: string;
  fileSize: string;
}

interface Props {
  files: File[];
}

const Table = ({ files }: Props) => {
  return (
    <div className="table">
      <TableHeader />
      <TableBody files={files} />
    </div>
  );
};

export default Table;
