import { useRef, useState } from "react";
import GetIcon from "../../../../common/Icons/GetIcon";
import "./fileTable.css";

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

const FileTable = ({ files }: Props) => {
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
    let checkbox = parentElement?.querySelector(".name-datacell");
    checkbox?.children[0]?.classList.remove("hidden");
    checkbox?.children[1]?.classList.add("hidden");
  };

  const handleFileRowClick = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;

    if (parentElement?.querySelector(".options-visible") === null) {
      parentElement = parentElement.closest(".file-list-row");
    }

    const checkbox = parentElement?.querySelector(
      ".name-datacell-checkbox"
    ) as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
  };

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
        {files.map(({ fileName, fileType, fileSize, lastModified, owner }) => (
          <div
            className="file-list-row"
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
                onClick={() => null}
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
              {lastModified.toString()}
            </span>
            <span className="file-size-datacell">{fileSize}</span>
            <span className="options-datacell">
              <div className="options-hidden">
                <GetIcon
                  className="options-datacell-icon"
                  iconType="addUser"
                  iconSize={20}
                />
                <GetIcon
                  className="options-datacell-icon"
                  iconType="download"
                  iconSize={20}
                />
                <GetIcon
                  className="options-datacell-icon"
                  iconType="edit"
                  iconSize={20}
                />
                <GetIcon
                  className="options-datacell-icon"
                  iconType="starEmpty"
                  iconSize={20}
                />
              </div>
              <GetIcon
                className="options-datacell-icon"
                iconType="dotsVirtical"
                iconSize={20}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileTable;
