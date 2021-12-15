import React from "react";
import Button from "../button/Button";
import styles from "./billboard.module.css";

const Billboard = ({ announcement, customStyle, btn }) => {
	return (
		<section className={styles.billboard} style={customStyle}>
			<p>{announcement}</p>
			{btn && (
				<Button
					text={btn.text}
					customStyle={{
						background: "#CFD8DC",
						color: "black",
						width: "150px",
					}}
					img={{
						src: btn.src,
						alt: btn.txt,
					}}
				/>
			)}
		</section>
	);
};

export default Billboard;
