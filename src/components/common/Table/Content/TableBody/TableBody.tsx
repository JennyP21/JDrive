import MyDriveFiles from "../../../../Dashboard/Content/My Drive/MyDriveFiles";
import { File } from "../../Container/Table";
import "./tableBody.css";

interface Props {
  files: File[];
  currentFileTable: string;
}

const TableBody = ({ files, currentFileTable }: Props) => {
  type ContentType = typeof MyDriveFiles;
  const contentMapping: { [key: string]: ContentType } = {
    "My Drive Files": MyDriveFiles,
  };
  const Content = contentMapping[currentFileTable];

  const showOptions = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;

    let showOptions = parentElement?.querySelector(".options-hidden");
    showOptions?.classList.remove("options-hidden");
    showOptions?.classList.add("options-visible");

    let replaceFileTypeIcon = parentElement?.querySelector(".name-datacell");
    replaceFileTypeIcon?.children[0]?.classList.add("hidden");
    replaceFileTypeIcon?.children[1]?.classList.remove("hidden");
  };

  const hideOptions = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;
    let hideOptions = parentElement?.querySelector(".options-visible");
    hideOptions?.classList.remove("options-visible");
    hideOptions?.classList.add("options-hidden");
  };

  const showCheckBox = (target: EventTarget) => {
    let parentElement = target as HTMLElement | null;
    let replaceFileTypeIcon = parentElement?.querySelector(".name-datacell");
    replaceFileTypeIcon?.children[0]?.classList.add("hidden");
    replaceFileTypeIcon?.children[1]?.classList.remove("hidden");
  };

  const hideCheckBox = (target: EventTarget) => {
    let targetElement = target as HTMLElement | null;

    const checkbox = targetElement?.querySelector(
      ".name-datacell-checkbox"
    ) as HTMLInputElement;

    if (!checkbox.checked) {
      let replaceCheckbox = targetElement?.querySelector(".name-datacell");
      replaceCheckbox?.children[0]?.classList.remove("hidden");
      replaceCheckbox?.children[1]?.classList.add("hidden");
    }
  };

  const handleFileRowClick = (
    currentTarget: EventTarget,
    target: EventTarget
  ) => {
    let targetElement = currentTarget as HTMLElement;

    if ((target as HTMLElement)?.classList[0] !== "name-datacell-checkbox") {
      const checkbox = targetElement?.querySelector(
        ".name-datacell-checkbox"
      ) as HTMLInputElement;
      checkbox.checked = !checkbox.checked;
    }

    targetElement?.classList.toggle("selected");
  };

  const formatBytes = (size: string) => {
    let bytes = parseInt(size);
    if (bytes == 0) return '0 Bytes';
    var k = 1024,
      dm = 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  return (
    <div>
      <Content
        showOptions={showOptions}
        hideOptions={hideOptions}
        showCheckBox={showCheckBox}
        hideCheckBox={hideCheckBox}
        handleFileRowClick={handleFileRowClick}
        formatBytes={formatBytes}
        files={files}
      />
    </div>
  );
};

export default TableBody;
