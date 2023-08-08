import Help from "../HelpList/Help";
import Settings from "../SettingsList/Settings";

interface Props {
  dataType: "settings" | "help";
  contentClassName: string;
}

type DataType = typeof Settings;

const DropDownContent = ({ dataType }: Props) => {
  const dataMapping: { [key: string]: DataType } = {
    settings: Settings,
    help: Help,
  };

  const Data = dataMapping[dataType];
  return <Data />;
};

export default DropDownContent;
