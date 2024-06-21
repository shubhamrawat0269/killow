import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.sectionWrapper}>
      <header className={styles.headerSection}>
        <div className={styles.headerContent}>
          <Link to={`/`}>
            <h2 className={styles.logoText}>Killow.</h2>
          </Link>
          <form className={styles.formSection}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.formInput}
            />
            <FaSearch className={styles.searchIcon} />
          </form>
          <ul className={styles.menuSection}>
            <Link to={`/`} className={styles.menuItemHidden}>
              Home
            </Link>
            <Link to={`/about`} className={styles.menuItemHidden}>
              About
            </Link>
            <Link to={`/sign-in`} className={styles.menuItemShow}>
              Sign in
            </Link>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
