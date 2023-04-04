import Help from "../Content/HelpList/Help";
import Settings from "../Content/SettingsList/Settings";

interface Props {
  items: string[];
  dataType: "options" | "settings" | "menu" | "help" | "profile";
  itemVisibility: boolean;
}

type DataType = typeof Settings;

const DropDownContent = ({ items, dataType, itemVisibility }: Props) => {
  const dataMapping: { [key: string]: DataType } = {
    settings: Settings,
    help: Help,
  };

  const Data = dataMapping[dataType];
  return <Data items={items} listVisible={itemVisibility} />;
};

export default DropDownContent;
