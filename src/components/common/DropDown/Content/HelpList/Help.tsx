import { useEffect, useRef } from "react";
import styles from "./help.module.css";

interface Props {
  items: string[];
  listVisible: boolean;
}

const Help = ({ items, listVisible }: Props) => {
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
      <hr className={styles.hr} />
      <li className="list-item">Terms and Policy</li>
      <hr className={styles.hr} />
      <li className="list-item">Send feedback to Google</li>
    </ul>
  );
};

export default Help;
