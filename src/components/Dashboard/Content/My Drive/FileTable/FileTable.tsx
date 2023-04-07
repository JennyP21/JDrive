import GetIcon from "../../../../common/Icons/GetIcon";
import "./fileTable.css";

const FileTable = () => {
  return (
    <div className="file-list">
      <div className="file-list-header">
        <div className="file-list-row">
          <span className="name-headcell">Name</span>
          <span className="owner-headcell">Owner</span>
          <span className="last-modified-headcell">Last modified</span>
          <span className="file-size-headcell">File size</span>
          <span className="options-headcell"></span>
        </div>
      </div>
      <div className="file-list-body">
        <div className="file-list-row">
          <span className="name-datacell">
            <GetIcon
              className="name-datacell-icon"
              iconType="folder"
              iconSize={25}
              onClick={() => null}
              color="#444"
            />
            <span className="name-datacell-text">Shared Files</span>
          </span>
          <span className="owner-datacell">Owner</span>
          <span className="last-modified-datacell">Last modified</span>
          <span className="file-size-datacell">File size</span>
          <span className="options-datacell">...</span>
        </div>
      </div>
    </div>
  );
};

export default FileTable;
