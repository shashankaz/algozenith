import styles from "./Sidebar.module.css";
import menuIcon from "../../assets/menu.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import learnIcon from "../../assets/learn.svg";
import forumsIcon from "../../assets/forums.svg";
import upskillIcon from "../../assets/upskill.svg";
import contestIcon from "../../assets/contest.svg";
import leaderboardIcon from "../../assets/leaderboard.svg";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.branding}>
        <img src={menuIcon} alt="Menu Icon" className={styles.icon} />
        <h1 className={styles.title}>AlgoZenith</h1>
      </header>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <img
              src={dashboardIcon}
              alt="Dashboard Icon"
              className={styles.icon}
            />
            <span>Dashboard</span>
          </li>
          <li className={styles.menuItem}>
            <img src={learnIcon} alt="Learn Icon" className={styles.icon} />
            <span>Learn</span>
          </li>
          <li className={styles.menuItem}>
            <img src={forumsIcon} alt="Forums Icon" className={styles.icon} />
            <span>Forums</span>
          </li>
          <li className={styles.menuItem}>
            <img src={upskillIcon} alt="Upskill Icon" className={styles.icon} />
            <span>Upskill</span>
          </li>
          <li className={styles.menuItem}>
            <img src={contestIcon} alt="Contest Icon" className={styles.icon} />
            <span>Contest</span>
          </li>
          <li className={styles.menuItem}>
            <img
              src={leaderboardIcon}
              alt="Leaderboard Icon"
              className={styles.icon}
            />
            <span>Leaderboard</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
