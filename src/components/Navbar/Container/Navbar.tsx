import { useState } from "react";
import Logo from "./Logo/Logo";
import Search from "./Searchbar/Search";
import "./navbar.css";
import AdvancedSearch from "./Searchbar/AdvancedSearch";
import Elements from "./Elements/Elements";

const Navbar = () => {
  const [adSearchVisibility, setAdSearchVisibility] = useState(false);

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
