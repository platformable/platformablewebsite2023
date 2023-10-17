import styles from "@/styles/OBOFTrendsReportspage.module.css";

export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className={styles.items}>
        <div className={`${styles.item} ${styles.active}`}>
          <img src="http://via.placeholder.com/500x500" alt="" />
        </div>
        <div className={`${styles.item} ${styles.next}`}>
          <img src="http://via.placeholder.com/500x500" alt="" />
        </div>
        <div className={`${styles.item}`}>
          <img src="http://via.placeholder.com/500x500" alt="" />
        </div>
        <div className={`${styles.item}`}>
          <img src="http://via.placeholder.com/500x500" alt="" />
        </div>
        <div className={`${styles.item} ${styles.prev}`}>
          <img src="http://via.placeholder.com/500x500" alt="" />
        </div>
        <div className={`${styles.buttonContainer}`}>
          <div className={styles.button}>
            <i className="fas fa-angle-left"></i>
          </div>
          <div className={styles.button}>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
