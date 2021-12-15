import React, { useEffect, useState } from "react";
import Part from "../../shared/components/part/Part";
import styles from "./video.module.css";
import sharedStyles from "../../shared/styles.module.css";
import { useHistory } from "react-router-dom";
import Button from "../../shared/components/button/Button";
import TopStrip from "../../shared/components/topStrip/TopStrip";

const Video = () => {
	const history = useHistory();
	const [fade, setFade] = useState(false);

	const handleOnclick = () => {
		setFade(false);
		const timeout = setTimeout(() => {
			history.replace("/unit/notes");
			clearTimeout(timeout);
		}, 500);
	};

	useEffect(() => {
		let unmounted = false;
		const timeout = setTimeout(() => {
			if (!unmounted) {
				setFade(true);
			}
			clearTimeout(timeout);
		}, 500);

		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<main className={styles.video} style={{ opacity: fade ? 1 : 0 }}>
			<Part flex={100} customStyle={{ margin: "0 auto" }}>
				<TopStrip />
				<iframe
					width="100%"
					style={{ aspectRatio: "16/9" }}
					src="https://www.youtube-nocookie.com/embed/CNFK86hJRfE?controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<header>
					<h1 className={sharedStyles.title}>
						Introduction to computer science
					</h1>
					<p>
						The video will guide you though the basics of computer science. No
						need to take notes, everything will be summarized in the next page.
						All you gotta do is pay attention
					</p>
					<Button
						text="Go to notes"
						customStyle={{
							background: "#CFD8DC",
							color: "black",
							width: "150px",
						}}
						onClick={handleOnclick}
					/>
				</header>
			</Part>
		</main>
	);
};

export default Video;
