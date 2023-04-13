import { useEffect, useRef } from "react";
import "./folderList.css";
import GetIcon from "../../../Icons/GetIcon";

export interface FolderListProps {
  iconType: string;
  text: string;
}

interface Props {
  items: FolderListProps[];
  listVisible: boolean;
}

const FolderList = ({ items, listVisible }: Props) => {
  const listRef = useRef(document.createElement("ul"));

  useEffect(() => {
    const listClasses = listRef.current.classList;
    if (listVisible) listClasses.replace("list-hidden", "list-visible");
    else listClasses.replace("list-visible", "list-hidden");
  }, [listVisible]);

  return (
    <ul ref={listRef} className="folder-list list-hidden">
      {items.map(({iconType, text}) => (
        <li className="list-item" key={text}>
          <GetIcon className="folder-list-icon" iconType={iconType} iconSize={25} />
          {text}
        </li>
      ))}
    </ul>
  );
};

export default FolderList;
