import React from "react";
import styles from "./card.module.css";
import sharedStyles from "../../styles.module.css";

const Card = ({ title, desc, progress, customStyle, img, onClick }) => {
	return (
		<div className={styles.card} style={customStyle} onClick={onClick}>
			<header>
				{img && <img src={img.src} alt={img.alt} />}
				<h4 className={sharedStyles.title}>{title}</h4>
			</header>
			<p className={styles.paragraph}>
				{desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
			</p>
			<div className={styles.progress}>{progress}% done</div>
		</div>
	);
};

export default Card;
