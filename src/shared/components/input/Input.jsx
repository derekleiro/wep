import React from "react";
import styles from "./input.module.css";

const Input = ({ type, title, onChange, customStyle, value }) => {
	return (
		<input
			type={type}
			className={styles.default_style}
			title={title}
			value={value}
			onChange={onChange}
			style={customStyle}
			placeholder={title}
		/>
	);
};

export default Input;
