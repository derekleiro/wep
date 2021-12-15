import React from "react";
import styles from "./select.module.css";

const Select = ({ title, onClick, customStyle, defaultValue, children }) => {
	return (
		<select
			className={styles.default_style}
			title={title}
			defaultValue={defaultValue}
			onChange={onClick}
			style={customStyle}
		>
			{children}
		</select>
	);
};

export default Select;
