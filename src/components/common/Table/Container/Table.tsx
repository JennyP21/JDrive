import TableBody from "../Content/TableBody/TableBody";
import TableHeader from "../Content/TableHeader/TableHeader";
import "./table.css";

export interface File {
  id: string;
  type: string;
  name: string;
  owner?: string;
  modified?: string;
  created?: string;
  size?: string;
  SharedBy?: string;
  ShareDate?: string;
  TrashedDate?: string;
  Location?: string;
}

interface Props {
  files: File[];
  titles: string[];
  currentFileTable: string;
}

const Table = ({ files, titles, currentFileTable }: Props) => {
  return (
    <div className="table">
      <TableHeader titles={titles} />
      <TableBody currentFileTable={currentFileTable} files={files} />
    </div>
  );
};

export default Table;
