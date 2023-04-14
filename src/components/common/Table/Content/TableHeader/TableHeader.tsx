import "./tableHeader.css";

const TableHeader = () => {
  return (
    <div className="file-list-header">
      <div className="file-list-row">
        <span className="name-headcell">Name</span>
        <span className="owner-headcell">Owner</span>
        <span className="last-modified-headcell">Last modified</span>
        <span className="file-size-headcell">File size</span>
        <span className="options-headcell"></span>
      </div>
    </div>
  );
};

export default TableHeader;
