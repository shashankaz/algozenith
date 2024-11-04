import styles from "./Navbar.module.css";
import bellIcon from "../../assets/bell.svg";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <button className={styles.notification}>
        <img src={bellIcon} alt="Notification Bell" className={styles.icon} />
      </button>
      <div className={styles.profilePicture}></div>
    </header>
  );
};

export default Navbar;
