import React from "react";
import styles from "./bottomstrip.module.css";

const BottomStrip = () => {
	return (
		<div className={styles.bottom_strip}>
			<ul>
				<li>Wep © 2021</li>

				<li>Terms</li>
				<li>Privacy</li>
				<li>Community</li>
				<li>Help</li>
			</ul>
		</div>
	);
};

export default BottomStrip;
