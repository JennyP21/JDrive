import "./fileTable.css";

const FileTable = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table-row">
          <th className="table-name">Name</th>
          <th className="table-owner">Owner</th>
          <th className="table-modified">Last modified</th>
          <th className="table-size">File size</th>
          <th className="table-options">...</th>
        </tr>
      </thead>
      <tbody></tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default FileTable;
