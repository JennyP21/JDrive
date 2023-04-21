import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./folderList.css";
import GetIcon from "../../../Icons/GetIcon";
import { uploadFile } from "../../../../../services/fileService";

export interface FolderListProps {
  iconType: string;
  text: string;
}

interface Props {
  items: FolderListProps[][];
  listVisible: boolean;
  contentClassName: string;
}

const FolderList = ({ items, listVisible, contentClassName }: Props) => {

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("fileName", file.name);
      formData.append("fileSize", file.size.toString());
      formData.append("fileType", file.type);
      formData.append("file", file);

      const result = await uploadFile(formData);
      console.log(result);
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
      {items.map((item) => (
        <div className="folder-list-container" key={item[0].iconType}>
          {item.map((fileList) => (
            <li className="list-item" key={fileList.iconType}>
              <GetIcon
                className="folder-list-icon"
                iconType={fileList.iconType}
                iconSize={25}
              />
              <label htmlFor="file-upload">
                {fileList.text}<input type="file" id="file-upload" className="folder-list-text" onChange={handleFileUpload}></input>
              </label>
            </li>
          ))}
          <hr className="folder-list-divider" />
        </div>
      ))}
    </ul>
  );
};

export default FolderList;
