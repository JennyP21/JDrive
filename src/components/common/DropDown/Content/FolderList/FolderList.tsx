import { ChangeEvent, useRef } from "react";
import "./folderList.css";
import GetIcon from "../../../Icons/GetIcon";
import { uploadFile } from "../../../../../services/fileService";

const FolderList = () => {

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

  const iconSize = 25;
  const listRef = useRef(document.createElement("ul"));

  return (
    <ul ref={listRef} className="folder-list">
      <div className="folder-list-container">
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="newFolder"
            iconSize={iconSize}
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
            iconSize={iconSize}
          />
          <label htmlFor="file-upload">
            File Upload<input type="file" id="file-upload" className="folder-list-text" onChange={handleFileUpload}></input>
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="folderUpload"
            iconSize={iconSize}
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
            iconSize={iconSize}
          />
          <label>
            Google Docs
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="sheet"
            iconSize={iconSize}
          />
          <label>
            Google Sheets
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="presentation"
            iconSize={iconSize}
          />
          <label>
            Google Slides
          </label>
        </li>
        <li className="list-item">
          <GetIcon
            className="folder-list-icon"
            iconType="form"
            iconSize={iconSize}
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
