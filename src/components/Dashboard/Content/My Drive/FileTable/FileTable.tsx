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

    // Replace Checkbox with fileIcon
    let replaceFileTypeIcon = parentElement?.querySelector(".name-datacell");
    replaceFileTypeIcon?.children[0]?.classList.toggle("hidden");
    replaceFileTypeIcon?.children[1]?.classList.toggle("hidden");
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

    // Replace fileIcon with Checkbox
    let replaceFileTypeIcon = parentElement?.querySelector(".name-datacell");
    replaceFileTypeIcon?.children[0]?.classList.toggle("hidden");
    replaceFileTypeIcon?.children[1]?.classList.toggle("hidden");
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
            onMouseEnter={(e) => showOptions(e.target)}
            onMouseLeave={(e) => hideOptions(e.target)}
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
                  onClick={() => null}
                />
                <GetIcon
                  className="options-datacell-icon"
                  iconType="download"
                  iconSize={20}
                  onClick={() => null}
                />
                <GetIcon
                  className="options-datacell-icon"
                  iconType="edit"
                  iconSize={20}
                  onClick={() => null}
                />
                <GetIcon
                  className="options-datacell-icon"
                  iconType="starEmpty"
                  iconSize={20}
                  onClick={() => null}
                />
              </div>
              <GetIcon
                className="options-datacell-icon"
                iconType="dotsVirtical"
                iconSize={20}
                onClick={() => null}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileTable;
