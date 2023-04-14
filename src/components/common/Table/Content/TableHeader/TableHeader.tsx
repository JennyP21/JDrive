import { FileTitles } from "../../Container/Table";
import "./tableHeader.css";

interface Props {
  titles: FileTitles[];
}

const TableHeader = ({ titles }: Props) => {
  return (
    <div className="table-header">
      {titles.map(({ Name, Owner, LastModified, FileSize, Menu }) => (
        <div className="table-row">
          <span className="name-headcell"></span>
          <span className="owner-headcell"></span>
          <span className="last-modified-headcell"></span>
          <span className="file-size-headcell"></span>
          <span className="options-headcell"></span>
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
