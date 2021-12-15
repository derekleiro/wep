import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import styles from "./emailsignup.module.css";
import sharedStyles from "../../../shared/styles.module.css";
import BottomStrip from "../../../shared/components/bottomStrip/BottomSrip";
import TopStrip from "../../../shared/components/topStrip/TopStrip";

const EmailSignup = () => {
	const history = useHistory();
	const [index, setIndex] = useState(0);
	const [input, setInput] = useState("");
	const [fade, setFade] = useState(false);
	const signupQuestions = [
		{
			question: "What is your email address?",
			type: "email",
			example: "johndoe@gmail.com",
		},
		{ question: "What is your name?", type: "text", example: "John Doe" },
		{
			question: "Type an easy to remember password for your account",
			type: "password",
			example: "********",
		},
	];

	const handleSubmit = () => {
		const totalQuestions = signupQuestions.length;
		setFade(false);
		setInput("");

		if (index + 1 !== totalQuestions) {
			const timeout = setTimeout(() => {
				setIndex((currIndex) => currIndex + 1);
				clearTimeout(timeout);
			}, 500);
		} else {
			const timeout = setTimeout(() => {
				setFade(false);
				history.replace("/boarding");
				clearTimeout(timeout);
			}, 500);
		}
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
	}, [index]);

	return (
		<main className="max_page">
			<TopStrip />
			<div
				className={`${styles.email_signup} ${sharedStyles.page}`}
				style={{ opacity: fade ? 1 : 0 }}
			>
				<header className={styles.email_signup_header}>
					<h4 className={`${styles.title} ${sharedStyles.title}`}>
						{signupQuestions[index].question}
					</h4>
				</header>
				<div className={styles.content}>
					<Input
						type={signupQuestions[index].type}
						value={input}
						title={signupQuestions[index].example}
						onChange={(e) => setInput(e.target.value)}
						customStyle={{ margin: "10px 0" }}
					/>
					<Button
						text="Next"
						onClick={handleSubmit}
						customStyle={{ width: "275px" }}
					/>
				</div>
			</div>
			<BottomStrip />
		</main>
	);
};

export default EmailSignup;
