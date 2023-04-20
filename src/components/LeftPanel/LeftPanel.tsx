import "./leftPanel.css";
import GetIcon from "../common/Icons/GetIcon";
import { FolderListProps } from "../common/DropDown/Content/FolderList/FolderList";
import LeftPanelDropDown from "../common/DropDown/Container/LeftPanelDropDown/LeftPanelDropDown";

export interface LeftPanelProps {
  id: number;
  iconType: string;
  itemText: string;
  expandable: boolean;
  selected: boolean;
}

interface Props {
  leftPanelItems: LeftPanelProps[];
  onSelect: (selectedItem: LeftPanelProps) => void;
  iconSize: number;
  dropDownItems: FolderListProps[][];
}

const LeftPanel = ({ leftPanelItems, onSelect, iconSize, dropDownItems }: Props) => {
  const handleExpand = (target: EventTarget) => {
    const targetElement = target as HTMLUnknownElement;
    targetElement?.classList.toggle("open");
  };

  return (
    <div className="leftpanel">
      <LeftPanelDropDown contentClassName="leftpanel-content" className="leftpanel-dropdown" items={dropDownItems} />
      {leftPanelItems.map(
        ({ id, iconType, itemText, expandable, selected }) => (
          <div
            className={
              selected
                ? "leftpanel-item my-drive selected"
                : "leftpanel-item my-drive"
            }
            key={id}
            onClick={() =>
              onSelect({ id, iconType, itemText, expandable, selected })
            }
          >
            {expandable && (
              <span onClick={(event) => handleExpand(event.target)}>
                <GetIcon
                  className="expandable-arrow"
                  iconType="triangleRight"
                />
              </span>
            )}
            <GetIcon
              className={
                expandable ? "leftpanel-icon" : "leftpanel-icon non-expandable"
              }
              iconType={iconType}
              iconSize={iconSize}
            />
            <span className="leftpanel-text">{itemText}</span>
          </div>
        )
      )}
    </div>
  );
};

export default LeftPanel;
