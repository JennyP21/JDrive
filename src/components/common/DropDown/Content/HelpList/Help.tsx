import { useRef } from "react";

const Help = () => {
  const listRef = useRef(document.createElement("ul"));

  return (
    <ul ref={listRef} className="list">
      <li className="list-item">
        Help
      </li>
      <li className="list-item">
        Training
      </li>
      <li className="list-item">
        Support
      </li>
      <hr />
      <li className="list-item">Terms and Policy</li>
      <hr />
      <li className="list-item">Send feedback to Google</li>
    </ul>
  );
};

export default Help;
