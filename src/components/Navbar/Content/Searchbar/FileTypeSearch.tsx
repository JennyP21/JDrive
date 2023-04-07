import GetIcon from "../../../common/Icons/GetIcon";

const FileTypeSearch = () => {
  const fileColorMapping = [
    ["document", "blue", "Documents"],
    ["sheet", "green", "SpreadSheets"],
    ["presentation", "orange", "Presentations"],
    ["form", "purple", "Forms"],
    ["folder", "grey", "Folder"],
    ["pdf", "red", "Pdf's"],
    ["video", "red", "Video"],
  ] as const;

  return (
    <div className="filetype-search">
      {fileColorMapping.map((file) => (
        <div className="filetype-container" key={file[0]}>
          <GetIcon
            className="filetype-icon"
            iconType={file[0]}
            iconSize={23}
            onClick={() => null}
            color={file[1]}
          />
          <p className="filetype-text">{file[2]}</p>
        </div>
      ))}
    </div>
  );
};

export default FileTypeSearch;
