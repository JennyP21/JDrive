import { useEffect, useRef } from "react";
import "./folderList.css";
import GetIcon from "../../../Icons/GetIcon";

export interface FolderListProps {
  iconType: string;
  text: string;
}

interface Props {
  items: FolderListProps[][];
  listVisible: boolean;
}

const FolderList = ({ items, listVisible }: Props) => {
  const listRef = useRef(document.createElement("ul"));

  useEffect(() => {
    const listClasses = listRef.current.classList;
    listVisible ? listClasses.replace("list-hidden", "list-visible") :
      listClasses.replace("list-visible", "list-hidden");
  }, [listVisible]);

  return (
    <ul ref={listRef} className="folder-list list-hidden">
      {items.map((item) => (
        <div className="folder-list-container" key={item[0].iconType}>
          {item.map((fileList) => (
            <li className="list-item" key={fileList.iconType}>
              <GetIcon
                className="folder-list-icon"
                iconType={fileList.iconType}
                iconSize={25}
              />
              <span className="folder-list-text">{fileList.text}</span>
            </li>
          ))}
          <hr className="folder-list-divider" />
        </div>
      ))}
    </ul>
  );
};

export default FolderList;
