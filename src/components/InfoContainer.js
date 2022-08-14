import React from "react";
import styles from "../styles/global.module.scss";


const InfoContainer = ({data}) => {
	return (
		<div className={styles.infoContainer}>
			<div className={styles.infoSection}>
				<p className={styles.infoHeading}>IP ADDRESS</p>
				<h1 className={styles.info}>{data && data["ip"]}</h1>
			</div>
			<div className={styles.infoSection}>
				<p className={styles.infoHeading}>LOCATION</p>
				<h1 className={styles.info}>
					{data &&
						`${data["location"]["city"]}, ${data["location"]["country"]}`}
				</h1>
			</div>
			<div className={styles.infoSection}>
				<p className={styles.infoHeading}>TIMEZONE</p>
				<h1 className={styles.info}>
					{data && `UTC ${data["location"]["timezone"]}`}
				</h1>
			</div>
			<div className={styles.infoSection}>
				<p className={styles.infoHeading}>ISP</p>
				<h1 className={styles.info}>{data && data["isp"]}</h1>
			</div>
		</div>
	);
};

export default InfoContainer;
