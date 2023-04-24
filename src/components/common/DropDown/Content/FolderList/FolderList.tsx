import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./folderList.css";
import GetIcon from "../../../Icons/GetIcon";
import { uploadFile } from "../../../../../services/fileService";

interface Props {
  listVisible: boolean;
  contentClassName: string;
}

const FolderList = ({ listVisible, contentClassName }: Props) => {

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("fileName", file.name);
      formData.append("fileSize", file.size.toString());
      formData.append("fileType", file.type);
      formData.append("file", file);

      await uploadFile(formData);
    }
  }

  const listRef = useRef(document.createElement("ul"));
  useEffect(() => {
    const listClasses = listRef.current.classList;
    listVisible ? listClasses.replace("list-hidden", "list-visible") :
      listClasses.replace("list-visible", "list-hidden");
  }, [listVisible]);

  return (
    <ul ref={listRef} className={"folder-list " + contentClassName + " list-hidden"}>

      <div className="folder-list-container">
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="newFolder"
            iconSize={25}
          />
          <label>
            New Folder
          </label>
        </li>
        <hr className="folder-list-divider" />
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="fileUpload"
            iconSize={25}
          />
          <label htmlFor="file-upload">
            File Upload<input type="file" id="file-upload" className="folder-list-text" onChange={handleFileUpload}></input>
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="folderUpload"
            iconSize={25}
          />
          <label>
            Folder Upload
          </label>
        </li>
        <hr className="folder-list-divider" />
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="document"
            iconSize={25}
          />
          <label>
            Google Docs
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="sheet"
            iconSize={25}
          />
          <label>
            Google Sheets
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="presentation"
            iconSize={25}
          />
          <label>
            Google Slides
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="form"
            iconSize={25}
          />
          <label>
            Google Forms
          </label>
        </li>
      </div>

    </ul>
  );
};

export default FolderList;
