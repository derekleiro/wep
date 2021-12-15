import React from "react";
import styles from "./topstrip.module.css";
import logo from "../../../assets/imgs/logo.png";

const TopStrip = () => {
	return (
		<div className={styles.top_strip}>
			<img src={logo} alt="Our logo" className={styles.logo} />
		</div>
	);
};

export default TopStrip;
