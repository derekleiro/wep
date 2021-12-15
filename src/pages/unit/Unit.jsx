import React, { useEffect, useState } from "react";
import Part from "../../shared/components/part/Part";
import styles from "./unit.module.css";
import sharedStyles from "../../shared/styles.module.css";
import { useHistory } from "react-router-dom";
import TopStrip from "../../shared/components/topStrip/TopStrip";
import Card from "../../shared/components/card/Card";
import Button from "../../shared/components/button/Button";

const Unit = () => {
	const history = useHistory();
	const [fade, setFade] = useState(false);

	const syllabus = [
		{
			title: "Introduction computer science",
			description:
				"This unit deals with the history of computer science, its uses, applications, connection with Maths and problem solving",
			progress: "21",
		},
		{
			title: "History of computer science",
			description:
				"This unit deals with the history of computer science, its uses, applications, connection with Maths and problem solving",
			progress: "21",
		},
		{
			title: "The applications of computer science",
			description:
				"This unit deals with the history of computer science, its uses, applications, connection with Maths and problem solving",
			progress: "21",
		},
		{
			title: "Problem solving with computer science",
			description:
				"This unit deals with the history of computer science, its uses, applications, connection with Maths and problem solving",
			progress: "21",
		},
	];

	const handleOnclick = () => {
		setFade(false);
		const timeout = setTimeout(() => {
			history.replace("/unit/video");
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
		<main className={styles.unit} style={{ opacity: fade ? 1 : 0 }}>
			<Part flex={60}>
				<header>
					<h1 className={sharedStyles.title}>
						Introduction to computer science
					</h1>
					<p>
						computer science, the study of computers and computing, including
						their theoretical and algorithmic foundations, hardware and
						software, and their uses for processing information. The discipline
						of computer science includes the study of algorithms and data
						structures, computer and network design, modeling data and
						information processes, and artificial intelligence. Computer science
						draws some of its foundations from mathematics and engineering and
						therefore incorporates techniques from areas such as queueing
						theory, probability and statistics, and electronic circuit design.
						Computer science also makes heavy use of hypothesis testing and
						experimentation during the conceptualization, design, measurement,
						and refinement of new algorithms, information structures, and
						computer architectures.
					</p>
					<p>
						Computer science is considered as part of a family of five separate
						yet interrelated disciplines: computer engineering, computer
						science, information systems, information technology, and software
						engineering. This family has come to be known collectively as the
						discipline of computing. These five disciplines are interrelated in
						the sense that computing is their object of study, but they are
						separate since each has its own research perspective and curricular
						focus.
					</p>
				</header>
				<h1 className={sharedStyles.title}>Syllabus</h1>
				<section className={styles.content}>
					{syllabus &&
						syllabus.map((item, index) => {
							return (
								<Card
									key={index}
									desc={item.description}
									progress={item.progress}
									title={item.title}
									customStyle={{
										background: "#cfd8dc",
										borderRadius: "35px",
										boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
										backdropFilter: "blur(6.5px)",
										"-webkit-backdrop-filter": "blur(6.5px)",
										border: "1px solid rgba(110, 135, 219, 0.3)",
									}}
									onClick={handleOnclick}
								/>
							);
						})}
				</section>
			</Part>
			<Part flex={20} customStyle={{ paddingLeft: "50px" }}>
				<TopStrip />
				<div style={{ position: "fixed" }}>
					<header>
						<h3 className={sharedStyles.title}>Total hours: 13</h3>
						<h3 className={sharedStyles.title}>Completed hours: 6</h3>
						<h3 className={sharedStyles.title}>
							Progress: {Math.floor((6 / 13) * 100)}%
						</h3>
					</header>
					<Button
						text="Continue"
						customStyle={{
							background: "#CFD8DC",
							color: "black",
							width: "150px",
						}}
						onClick={handleOnclick}
					/>
				</div>
			</Part>
		</main>
	);
};

export default Unit;
