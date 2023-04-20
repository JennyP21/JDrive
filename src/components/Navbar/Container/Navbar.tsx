import { useState } from "react";
import "./navbar.css";
import Logo from "../Content/Logo/Logo";
import Elements from "../Content/Elements/Elements";
import AdvancedSearch from "../Content/Searchbar/AdvancedSearch";
import Search from "../Content/Searchbar/Search";
import useItemVisibility from "../../hooks/useItemVisibility";

const Navbar = () => {
  const [adSearchVisibility, setAdSearchVisibility] = useState(false);

  useItemVisibility({ itemVisibility: adSearchVisibility, setItemVisibility: setAdSearchVisibility, containerClassName: "search-menu-icon", contentClassname: "adsearch" });

  return (
    <>
      <nav className="nav">
        <Logo />
        <Search
          adSearchVisibility={adSearchVisibility}
          setAdSearchVisibility={setAdSearchVisibility}
        />
        <Elements />
      </nav>
      {adSearchVisibility && (
        <AdvancedSearch
          adSearchVisibility={adSearchVisibility}
          setAdSearchVisibility={setAdSearchVisibility}
        />
      )}
    </>
  );
};

export default Navbar;
