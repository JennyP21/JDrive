import GetIcon from "../../../Icons/GetIcon";
import { File } from "../../Container/Table";
import "./tableBody.css";
import TableHiddenOptions from "./TableHiddenOptions";

interface Props {
  files: File[];
}

const TableBody = ({ files }: Props) => {
  const showOptions = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;

    if (parentElement?.querySelector(".options-hidden") === null) {
      parentElement = parentElement.closest(".file-list-row");
    }
    // Show the hidden options on hover
    let showOptions = parentElement?.querySelector(".options-hidden");
    showOptions?.classList.remove("options-hidden");
    showOptions?.classList.add("options-visible");

    let replaceFileTypeIcon = parentElement?.querySelector(".name-datacell");
    replaceFileTypeIcon?.children[0]?.classList.add("hidden");
    replaceFileTypeIcon?.children[1]?.classList.remove("hidden");
  };

  const hideOptions = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;

    if (parentElement?.querySelector(".options-visible") === null) {
      parentElement = parentElement.closest(".file-list-row");
    }
    // Show the hidden options on hover
    let hideOptions = parentElement?.querySelector(".options-visible");
    hideOptions?.classList.remove("options-visible");
    hideOptions?.classList.add("options-hidden");
  };

  const showCheckBox = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;

    if (parentElement?.querySelector(".options-visible") === null) {
      parentElement = parentElement.closest(".file-list-row");
    }
    let replaceFileTypeIcon = parentElement?.querySelector(".name-datacell");
    replaceFileTypeIcon?.children[0]?.classList.add("hidden");
    replaceFileTypeIcon?.children[1]?.classList.remove("hidden");
  };

  const hideCheckBox = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;

    if (parentElement?.querySelector(".options-visible") === null) {
      parentElement = parentElement.closest(".file-list-row");
    }

    const checkbox = parentElement?.querySelector(
      ".name-datacell-checkbox"
    ) as HTMLInputElement;

    if (!checkbox.checked) {
      let replaceCheckbox = parentElement?.querySelector(".name-datacell");
      replaceCheckbox?.children[0]?.classList.remove("hidden");
      replaceCheckbox?.children[1]?.classList.add("hidden");
    }
  };

  const handleFileRowClick = (target: EventTarget) => {
    let targetElement = target as HTMLElement;

    const parentElement = targetElement.closest(".file-list-row");

    if (targetElement?.classList[0] !== "name-datacell-checkbox") {
      const checkbox = parentElement?.querySelector(
        ".name-datacell-checkbox"
      ) as HTMLInputElement;
      checkbox.checked = !checkbox.checked;
    }
    parentElement?.classList.toggle("selected");
  };

  return (
    <div className="table-body">
      {files.map(({ fileName, fileType, fileSize, lastModified, owner }) => (
        <div
          className="table-row"
          key={fileName}
          onMouseEnter={(e) => {
            showOptions(e.target);
            showCheckBox(e.target);
          }}
          onMouseLeave={(e) => {
            hideOptions(e.target);
            hideCheckBox(e.target);
          }}
          onClick={(e) => {
            handleFileRowClick(e.target);
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

export default TableBody;
