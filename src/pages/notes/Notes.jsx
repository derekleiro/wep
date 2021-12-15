import React, { useEffect, useState } from "react";
import Part from "../../shared/components/part/Part";
import styles from "./notes.module.css";
import sharedStyles from "../../shared/styles.module.css";
import { useHistory } from "react-router-dom";
import Button from "../../shared/components/button/Button";
import TopStrip from "../../shared/components/topStrip/TopStrip";

const Notes = () => {
	const history = useHistory();
	const [fade, setFade] = useState(false);

	const handleOnclick = () => {
		setFade(false);
		const timeout = setTimeout(() => {
			history.replace("/unit/quiz");
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
		<main className={styles.notes} style={{ opacity: fade ? 1 : 0 }}>
			<Part flex={100} customStyle={{ margin: "0 auto" }}>
				<TopStrip />

				<header>
					<ol>
						<li>
							<h1 className={sharedStyles.title}>What is computer science?</h1>
							<p>
								Computer science is the study of computers and computing as well
								as their theoretical and practical applications.
							</p>
						</li>

						<li>
							<h1 className={sharedStyles.title}>
								What are the applications of computer science?
							</h1>
							<p>
								Computer science can be applied on many fields examples being:
								AI, Self driving cars, Computational photography, Medical
								imaging etc.
							</p>
						</li>

						<li>
							<h1 className={sharedStyles.title}>What is problem solving?</h1>
							<p>
								Problem solving consists of using generic or ad hoc methods in
								an orderly manner to find solutions to difficulties.
							</p>
						</li>

						<li>
							<h1 className={sharedStyles.title}>
								The mathematics of computer science
							</h1>
							<p>
								Discrete mathematics is the study of mathematical structures
								that are fundamentally discrete rather than continuous.
							</p>
						</li>
					</ol>

					<Button
						text="Go to the quiz"
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

export default Notes;
