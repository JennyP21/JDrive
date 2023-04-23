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
  formatBytes: (size: string) => string;
}

const MyDriveFiles = ({
  showOptions,
  hideOptions,
  showCheckBox,
  hideCheckBox,
  handleFileRowClick,
  formatBytes,
  files,
}: Props) => {
  return (
    <div className="table-body">
      {files && files.map(({ id, name, type, size, modified }) => (
        <div
          className="table-row"
          key={id}
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
              iconType={type.split("/")[0]}
              iconSize={25}
            />
            <input
              type="checkbox"
              className="name-datacell-checkbox hidden"
              value={name}
            />
            <span className="name-datacell-text">{name}</span>
          </span>

          <span className="owner-datacell">Jenny</span>

          <span className="last-modified-datacell">
            {modified?.split("T")[0]}
          </span>

          <span className="file-size-datacell">{formatBytes(size || '')}</span>

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
