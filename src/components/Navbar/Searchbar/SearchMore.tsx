import { AdvancedSearchProps } from "./AdvancedSearch";

const RecentSearch = ({
  adSearchVisibility,
  setAdSearchVisibility,
}: AdvancedSearchProps) => {
  return (
    <div className="search-more">
      <div className="search-more-container">
        <button
          className="search-more-button"
          onClick={() => setAdSearchVisibility(!adSearchVisibility)}
        >
          Show Search Options
        </button>
      </div>
    </div>
  );
};

export default RecentSearch;
