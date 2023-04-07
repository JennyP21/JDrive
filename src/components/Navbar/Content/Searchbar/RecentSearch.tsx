import GetIcon from "../../common/Icons/GetIcon";

const RecentSearch = () => {
  return (
    <div className="recent-search">
      <div className="recent-search-container">
        <GetIcon
          className="recent-search-icon"
          iconSize={25}
          iconType="history"
          onClick={() => null}
        />
        <p className="recent-search-text">Purchases</p>
      </div>
    </div>
  );
};

export default RecentSearch;
