import React from "react";
import styles from "./button.module.css";

const Button = ({ onClick, text, customStyle, img }) => {
	return (
		<button
			className={styles.default_style}
			onClick={onClick}
			style={customStyle}
			title={text}
		>
			{img && <img src={img.src} title={img.alt} alt={img.alt} />}

			{text}
		</button>
	);
};

export default Button;
