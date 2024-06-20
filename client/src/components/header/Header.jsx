import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h2 className={styles.logoText}>Killow.</h2>
          <form className={styles.formSection}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.formInput}
            />
            <FaSearch className={styles.searchIcon} />
          </form>
          <ul className={styles.menuSection}>
            <Link to={`/`} className={styles.menuItem}>
              Home
            </Link>
            <Link to={`/about`} className={styles.menuItem}>
              About
            </Link>
            <Link to={`/sign-in`} className={styles.menuItem}>
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
