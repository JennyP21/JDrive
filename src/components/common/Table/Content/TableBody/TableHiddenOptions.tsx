import GetIcon from "../../../Icons/GetIcon";

const TableHiddenOptions = () => {
  return (
    <div className="options-hidden">
      <GetIcon
        className="options-datacell-icon"
        iconType="addUser"
        iconSize={20}
      />
      <GetIcon
        className="options-datacell-icon"
        iconType="download"
        iconSize={20}
      />
      <GetIcon
        className="options-datacell-icon"
        iconType="edit"
        iconSize={20}
      />
      <GetIcon
        className="options-datacell-icon"
        iconType="starEmpty"
        iconSize={20}
      />
    </div>
  );
};

export default TableHiddenOptions;
