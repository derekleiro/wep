import React, { useEffect, useState } from "react";
import Card from "../../shared/components/card/Card";
import Part from "../../shared/components/part/Part";
import TopStrip from "../../shared/components/topStrip/TopStrip";
import styles from "./dashboard.module.css";
import units_icon from "../../assets/icons/units.png";
import progress_icon from "../../assets/icons/progress.png";
import community_icon from "../../assets/icons/community.png";
import profile_icon from "../../assets/icons/profile.png";
import Button from "../../shared/components/button/Button";
import Billboard from "../../shared/components/billboard/Billboard";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
	const history = useHistory();
	const [fade, setFade] = useState(false);
	const [course_, setCourse] = useState("Software engineering");

	const btn_style = {
		default: {
			background: "transparent",
			color: "black",
			width: "150px",
		},
		active: {
			background: "#CFD8DC",
			color: "black",
			width: "150px",
		},
	};

	const content = {
		junior: [],
		secondary: [],
		university: [
			{
				name: "Introduction to computer science",
				desc: "Computer science is the study of computers and computing as well as their theoretical and practical applications.",
				progress: 55,
				img: {
					src: "https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=",
					alt: "Man coding",
				},
			},
			{
				name: "Introduction to Problem solving",
				desc: "Problem solving consists of using generic or ad hoc methods in an orderly manner to find solutions to difficulties.",
				progress: 55,
				img: {
					src: "https://media.istockphoto.com/photos/programmer-controlling-the-statistics-of-the-site-picture-id1139938843?k=20&m=1139938843&s=612x612&w=0&h=nJSMJEvTGin4vsBZpTAmpFgE_-y5J-mPTzRAZ03lCjk=",
					alt: "Man coding",
				},
			},
			{
				name: "Discrete mathematics for computer science",
				desc: "Discrete mathematics is the study of mathematical structures that are fundamentally discrete rather than continuous.",
				progress: 55,
				img: {
					src: "https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					alt: "Man coding",
				},
			},
			{
				name: "Introduction to computer science",
				desc: "Computer science is the study of computers and computing as well as their theoretical and practical applications.",
				progress: 55,
				img: {
					src: "https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562",
					alt: "Man coding",
				},
			},
			{
				name: "Introduction to computer science",
				desc: "Computer science is the study of computers and computing as well as their theoretical and practical applications.",
				progress: 55,
				img: {
					src: "https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562",
					alt: "Man coding",
				},
			},
			{
				name: "Introduction to computer science",
				desc: "Computer science is the study of computers and computing as well as their theoretical and practical applications.",
				progress: 55,
				img: {
					src: "https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562",
					alt: "Man coding",
				},
			},
		],
	};

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
		<main className={styles.dashboard} style={{ opacity: fade ? 1 : 0 }}>
			<Part flex={20}>
				<ul className={styles.ul}>
					<li>
						<Button
							text="My units"
							customStyle={btn_style.active}
							img={{
								src: units_icon,
								alt: "My units",
							}}
						/>
					</li>
					<li>
						<Button
							text="My progress"
							customStyle={btn_style.default}
							img={{
								src: progress_icon,
								alt: "My progress",
							}}
						/>
					</li>
					<li>
						<Button
							text="Community"
							customStyle={btn_style.default}
							img={{
								src: community_icon,
								alt: "Community",
							}}
						/>
					</li>
					<li>
						<Button
							text="My profile"
							customStyle={btn_style.default}
							img={{
								src: profile_icon,
								alt: "My profile",
							}}
						/>
					</li>
				</ul>
			</Part>
			<Part flex={80}>
				<TopStrip />
				<div className={styles.content}>
					{content.university.map((course, index) => {
						return (
							<Card
								key={index}
								title={course.name}
								desc={course.desc}
								progress={course.progress}
								onClick={handleOnclick}
								img={course.img}
							/>
						);
					})}
					<Billboard announcement="Finish all the units for this period to gain access to the exams and progress with the next units/graduation" />
				</div>
			</Part>
		</main>
	);
};

export default Dashboard;
