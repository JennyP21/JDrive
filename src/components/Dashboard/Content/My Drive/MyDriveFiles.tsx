import GetIcon from "../../../common/Icons/GetIcon";
import { File } from "../../../common/Table/Container/Table";
import TableHiddenOptions from "../../../common/Table/Content/TableBody/TableHiddenOptions";

interface Props {
  files: File[];
  showOptions: (target: EventTarget) => void;
  showCheckBox: (target: EventTarget) => void;
  hideOptions: (target: EventTarget) => void;
  hideCheckBox: (target: EventTarget) => void;
  handleFileRowClick: (currentTarget: EventTarget, target: EventTarget) => void;
}

const MyDriveFiles = ({
  showOptions,
  hideOptions,
  showCheckBox,
  hideCheckBox,
  handleFileRowClick,
  files,
}: Props) => {
  return (
    <div className="table-body">
      {files.map(({ fileName, fileType, fileSize, lastModified, owner }) => (
        <div
          className="table-row"
          key={fileName}
          onMouseEnter={(e) => {
            showOptions(e.currentTarget);
            showCheckBox(e.currentTarget);
          }}
          onMouseLeave={(e) => {
            hideOptions(e.currentTarget);
            hideCheckBox(e.currentTarget);
          }}
          onClick={(e) => {
            handleFileRowClick(e.currentTarget, e.target);
          }}
        >
          <span className="name-datacell">
            <GetIcon
              className="name-datacell-icon"
              iconType={fileType}
              iconSize={25}
            />
            <input
              type="checkbox"
              className="name-datacell-checkbox hidden"
              value={fileName}
            />
            <span className="name-datacell-text">{fileName}</span>
          </span>

          <span className="owner-datacell">{owner}</span>

          <span className="last-modified-datacell">
            {lastModified?.toString()}
          </span>

          <span className="file-size-datacell">{fileSize}</span>

          <span className="options-datacell">
            <TableHiddenOptions />
            <GetIcon
              className="options-datacell-icon"
              iconType="dotsVirtical"
              iconSize={20}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default MyDriveFiles;