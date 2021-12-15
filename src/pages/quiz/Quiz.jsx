import React, { useEffect, useState } from "react";
import Part from "../../shared/components/part/Part";
import styles from "./quiz.module.css";
import sharedStyles from "../../shared/styles.module.css";
import { useHistory } from "react-router-dom";
import Button from "../../shared/components/button/Button";
import TopStrip from "../../shared/components/topStrip/TopStrip";
import Select from "../../shared/components/select/Select";

const Quiz = () => {
	const history = useHistory();
	const [fade, setFade] = useState(false);

	const handleOnclick = () => {
		setFade(false);
		const timeout = setTimeout(() => {
			history.replace("/unit");
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
		<main className={styles.quiz} style={{ opacity: fade ? 1 : 0 }}>
			<Part flex={100} customStyle={{ margin: "0 auto" }}>
				<TopStrip />

				<header>
					<ol>
						<li>
							<h1 className={sharedStyles.title}>What is computer science?</h1>
							<Select title={"What is computer science?"}>
								<option title={"A"} value={"A"}>
									A. The study of computers and computing, including their
									theoretical and algorithmic foundations, hardware and software
								</option>
								<option title={"B"} value={"B"}>
									B.
								</option>
								<option title={"C"} value={"C"}>
									C.
								</option>
								<option title={"D"} value={"D"}>
									D.
								</option>
							</Select>
						</li>

						<li>
							<h1 className={sharedStyles.title}>
								What is an application of computer science?
							</h1>
							<Select title={"What are the applications of computer science?"}>
								<option title={"A"} value={"A"}>
									A. Mining coal
								</option>
								<option title={"B"} value={"B"}>
									B. Artificial intelligence
								</option>
								<option title={"C"} value={"C"}>
									C. The study of computers and computing, including their
									theoretical and algorithmic foundations, hardware and software
								</option>
								<option title={"D"} value={"D"}>
									D. The study of computers and computing, including their
									theoretical and algorithmic foundations, hardware and software
								</option>
							</Select>
						</li>

						<li>
							<h1 className={sharedStyles.title}>What is problem solving?</h1>
							<Select title={"What is problem solving?"}>
								<option title={"A"} value={"A"}>
									A. The process of finding solutions to difficult or complex
									issues.
								</option>
								<option title={"B"} value={"B"}>
									B. The process of finding solutions to difficult or complex
									issues.
								</option>
								<option title={"C"} value={"C"}>
									C. The process of finding solutions to difficult or complex
									issues.
								</option>
								<option title={"D"} value={"D"}>
									D. The process of finding solutions to difficult or complex
									issues.
								</option>
							</Select>
						</li>

						<li>
							<h1 className={sharedStyles.title}>
								What's the importance of mathematics in computer science
							</h1>
							<Select title={"The mathematics of computer science"}>
								<option title={"A"} value={"A"}>
									A. Mathematics Teaches the Usage of Algorithms
								</option>
								<option title={"B"} value={"B"}>
									B. Mathematics Provides the Analytical Skills Required in
									Computer Science
								</option>
								<option title={"C"} value={"C"}>
									C. Mathematical Concepts are Required in many Disciplines of
									Computer Science
								</option>
								<option title={"D"} value={"D"}>
									D. All of the above
								</option>
							</Select>
						</li>
					</ol>

					<Button
						text="Get results"
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

export default Quiz;
