import "./suggestions.css";
import GetIcon from "../../../../common/Icons/GetIcon";
import { useEffect, useRef, useState } from "react";

interface SuggestionsProps {
  fileType: string;
  fileName: string;
  activity: string;
}

interface Props {
  suggestedFiles: SuggestionsProps[];
}

const Suggestions = ({ suggestedFiles }: Props) => {
  const [activeElementIndex, setActiveElementIndex] = useState(-1);

  return (
    <div
      className="suggetions"
      onClick={(event) => {
        event.preventDefault();
        const selectedTarget = (event.target as HTMLElement).closest(
          ".suggestion"
        ) as HTMLElement;
        const suggestionElements = [
          ...document.getElementsByClassName("suggestion"),
        ];

        if (!suggestionElements.includes(selectedTarget)) {
          setActiveElementIndex(-1);
        }
      }}
    >
      <h4 className="suggestions-heading">Suggested</h4>

      {suggestedFiles.map(({ fileName, fileType, activity }, index) => (
        <div
          className={
            activeElementIndex === index ? "suggestion selected" : "suggestion"
          }
          key={fileName}
          onClick={(e) => setActiveElementIndex(index)}
        >
          <div className="file">
            <GetIcon className="" iconSize={18} iconType={fileType} />
            <span className="file-name">{fileName}</span>
          </div>
          <div className="preview"></div>
          <p className="activity">{activity}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
