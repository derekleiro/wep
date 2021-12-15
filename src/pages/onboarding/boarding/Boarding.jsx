import React, { useEffect, useState } from "react";
import styles from "./boarding.module.css";
import sharedStyles from "../../../shared/styles.module.css";
import Button from "../../../shared/components/button/Button";
import { useHistory } from "react-router-dom";
import Select from "../../../shared/components/select/Select";
import BottomStrip from "../../../shared/components/bottomStrip/BottomSrip";
import TopStrip from "../../../shared/components/topStrip/TopStrip";

const Boarding = () => {
	const history = useHistory();
	const [index, setIndex] = useState(-1);
	const [level, setLevel] = useState(0);
	const [input, setInput] = useState("");
	const [fade, setFade] = useState(false);

	const handleLevelSet = (e) => {
		setLevel(parseInt(e.target.value));
	};

	const handleSubmit = () => {
		const totalQuestions = 1;

		setFade(false);
		setInput("");

		if (index + 1 !== totalQuestions) {
			const timeout = setTimeout(() => {
				setIndex((currIndex) => currIndex + 1);
				clearTimeout(timeout);
			}, 500);
		} else {
			const timeout = setTimeout(() => {
				history.replace("/dashboard");
				clearTimeout(timeout);
			}, 500);
		}
	};

	const boardingQuestions = [
		{
			question: "Which grade is your child in?",
			title: "Please select your child's grade",
			options: [
				"grade 1",
				"grade 2",
				"grade 3",
				"grade 4",
				"grade 5",
				"grade 6",
			],
		},
		{
			question: "What highschool year are you in?",
			title: "Select your highschool year",
			options: [
				"first year/ grade 7/ form 1",
				"second year/ grade 8/ form 2",
				"third year/ grade 9/ form 3",
				"forth year/ grade 10/ form 4",
				"fifth year/ grade 11/ form 5/ O Levels",
				"sixth year/ grade 12/ form 6/ As Level",
				"final year/ grade 13/ form 6 upper/ A Level",
			],
		},
		{
			question:
				"What course do you want to pursue or which one are you currently pursuing from our available courses?",
			title: "Select a course",
			options: ["Software engineering", "Marketing", "Business"],
		},
	];

	const startingSlide = (
		<>
			<header className={styles.header}>
				<h4 className={`${styles.title} ${sharedStyles.title}`}>
					What is your education level or where did you stop at?
				</h4>
			</header>
			<div className={styles.content}>
				<Select title="Select an education level" onClick={handleLevelSet}>
					<option title="Junior/primary school" value={0}>
						Junior/primary school
					</option>
					<option title="Highschool" value={1}>
						Highschool
					</option>
					<option title="University" value={2}>
						University
					</option>
				</Select>
				<Button
					text="Next"
					onClick={handleSubmit}
					customStyle={{ margin: "10px 0", width: "275px" }}
				/>
			</div>
		</>
	);

	const boardingSlides = (
		<>
			<header className={styles.header}>
				<h4 className={`${styles.title} ${sharedStyles.title}`}>
					{boardingQuestions[level].question}
				</h4>
			</header>
			<div className={styles.content}>
				<Select
					title={boardingQuestions[level].title}
					onClick={(e) => setInput(e.target.value)}
				>
					{boardingQuestions[level].options.map((option, index_) => {
						return (
							<option key={index_} title={option} value={option}>
								{option}
							</option>
						);
					})}
				</Select>
				<Button
					text="Next"
					onClick={handleSubmit}
					customStyle={{ margin: "10px 0" }}
				/>
			</div>
		</>
	);

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
	}, [index]);

	return (
		<main className="max_page">
			<TopStrip />
			<section
				className={`${styles.boarding} ${sharedStyles.page}`}
				style={{ opacity: fade ? 1 : 0 }}
			>
				{index === -1 ? startingSlide : boardingSlides}
			</section>
			<BottomStrip />
		</main>
	);
};

export default Boarding;
