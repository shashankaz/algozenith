import { useState } from "react";
import styles from "./Menu.module.css";
import mentorIcon from "../../assets/mentor.svg";
import bagIcon from "../../assets/bag.svg";
import infoIcon from "../../assets/info.svg";
import clockIcon from "../../assets/clock.svg";
import clockIconBlack from "../../assets/clock-black.svg";
import contestIcon from "../../assets/contest.svg";
import copyIcon from "../../assets/copy.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import video from "../../assets/video.svg";

const Menu = () => {
  const [openSections, setOpenSections] = useState([true, false, false]);

  const chapters = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4",
    "Chapter 5",
  ];
  const resources = [
    "Video 1",
    "Article 1",
    "Quiz 1",
    "Coding Exercise 1",
    "Combined Resource 1",
  ];

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.map((open, idx) => (idx === index ? !open : open))
    );
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.headerSection}>
        <div className={styles.buttonGroup}>
          <button className={styles.actionButton}>
            <img
              src={mentorIcon}
              alt="Mentor Icon"
              className={styles.iconImage}
            />
            Mentor Sessions
          </button>
          <button className={`${styles.actionButton} ${styles.activeButton}`}>
            <img
              src={bagIcon}
              alt="Learning Material Icon"
              className={styles.iconImage}
            />
            Learning Material
          </button>
        </div>
        <div className={styles.infoButton}>
          <img src={infoIcon} alt="Info Icon" className={styles.iconImage} />
          How it works
        </div>
      </div>

      <hr />

      <div className={styles.contentSection}>
        <div className={styles.chapterList}>
          <ul>
            {chapters.map((chapter, index) => (
              <li key={index} className={styles.chapterItem1}>
                {chapter}
                {index === 0 && (
                  <span className={styles.chapterTime1}>
                    <img
                      src={clockIcon}
                      alt="Clock Icon"
                      className={styles.iconImage}
                    />
                    05:00:00
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {[1, 2, 3].map((part, index) => (
            <div
              key={part}
              className={`${styles.chapterCard} ${
                openSections[index] ? styles.shadow : ""
              }`}
            >
              <div
                className={styles.cardHeader}
                onClick={() => toggleSection(index)}
              >
                <div className={styles.upper}>
                  <div>
                    <h1 className={styles.partNo}>PART {part}</h1>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                  </div>
                  <div className={styles.cardIcons}>
                    <div className={styles.icon}>
                      <img
                        src={clockIconBlack}
                        alt="Clock Icon"
                        className={styles.iconImage}
                      />
                      02:00:00
                    </div>
                    <div className={styles.icon}>
                      <img
                        src={contestIcon}
                        alt="Contest Icon"
                        className={styles.iconImage}
                      />
                      Medium
                    </div>
                    <div className={styles.icon}>
                      <img
                        src={copyIcon}
                        alt="Copy Icon"
                        className={styles.iconImage}
                      />
                      5
                    </div>
                    <div className={styles.icon}>
                      {openSections[index] ? (
                        <img
                          src={arrowUpIcon}
                          alt="Arrow Up Icon"
                          className={styles.iconImage}
                        />
                      ) : (
                        <img
                          src={arrowUpIcon}
                          alt="Arrow Up Icon"
                          className={styles.iconImage}
                          style={{ transform: "rotate(180deg)" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.progressText}>
                  <span>
                    {part === 1
                      ? "45% Completed"
                      : part === 2
                      ? "20% Completed"
                      : "0% Completed"}
                  </span>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{
                    width: part === 1 ? "45%" : part === 2 ? "20%" : "0%",
                  }}
                ></div>
              </div>
              {openSections[index] && (
                <ul>
                  {resources.map((resource, idx) => (
                    <li key={idx}>
                      <div className={styles.chapterItem2}>
                        <span className={styles.title}>
                          <img
                            src={video}
                            alt="Clock Icon"
                            className={styles.iconImage}
                          />
                          {resource}
                        </span>
                        <span className={styles.chapterTime}>
                          <img
                            src={clockIconBlack}
                            alt="Clock Icon"
                            className={styles.iconImage}
                          />
                          10:00
                        </span>
                      </div>
                      {idx < resources.length - 1 && (
                        <div className={styles.bar}></div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
