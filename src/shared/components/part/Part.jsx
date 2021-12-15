import React from "react";
import styles from "./part.module.css";

const Part = ({ children, flex, customStyle }) => {
	return (
		<section className={styles.part} style={{ flex, ...customStyle }}>
			{children}
		</section>
	);
};

export default Part;
