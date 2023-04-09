import { useEffect, useRef } from "react";
import "./folderList.css";

interface Props {
  items: string[];
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
    <ul ref={listRef} className="list list-hidden">
      {items.map((item) => (
        <li className="list-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FolderList;
