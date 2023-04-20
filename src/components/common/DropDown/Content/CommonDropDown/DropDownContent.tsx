import Help from "../HelpList/Help";
import Settings from "../SettingsList/Settings";

interface Props {
  items: string[];
  dataType: "options" | "settings" | "menu" | "help" | "profile";
  itemVisibility: boolean;
  contentClassName: string;
}

type DataType = typeof Settings;

const DropDownContent = ({ items, dataType, itemVisibility, contentClassName }: Props) => {
  const dataMapping: { [key: string]: DataType } = {
    settings: Settings,
    help: Help,
  };

  const Data = dataMapping[dataType];
  return <Data items={items} listVisible={itemVisibility} className={contentClassName} />;
};

export default DropDownContent;
