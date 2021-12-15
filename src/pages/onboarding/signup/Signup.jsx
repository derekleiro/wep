import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../shared/components/button/Button";
import styles from "./signup.module.css";
import sharedStyles from "../../../shared/styles.module.css";
import BottomStrip from "../../../shared/components/bottomStrip/BottomSrip";

import google_logo from "../../../assets/icons/google.png";
import apple_logo from "../../../assets/icons/apple.png";
import phone_logo from "../../../assets/icons/phone.png";
import email_icon from "../../../assets/icons/email.png";
import TopStrip from "../../../shared/components/topStrip/TopStrip";

const Signup = () => {
	const history = useHistory();
	const [fade, setFade] = useState(false);

	const handleRedirect = (url) => {
		setFade(false);
		const timeout = setTimeout(() => {
			history.replace(url);
			clearTimeout(timeout);
		}, 500);
	};
	const handleGoogleSignup = () => {
		// ? proceed to the boarding page

		handleRedirect("/boarding");
	};

	const handleAppleSignup = () => {
		// ? proceed to the boarding page

		handleRedirect("/boarding");
	};

	const handleEmailSignup = () => {
		// ? proceed to the email page

		handleRedirect("/email");
	};

	const handlePhoneSignup = () => {
		// ? proceed to the boarding page

		handleRedirect("/boarding");
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
		<main className="max_page">
			<TopStrip />
			<div
				className={`${styles.signup} ${sharedStyles.page}`}
				style={{ opacity: fade ? 1 : 0 }}
			>
				<header>
					<h1 className={`${styles.title} ${sharedStyles.title}`}>
						Welcome to the world education program. Education free for all for
						life
					</h1>
					<h4 style={{ color: "grey", fontFamily: "Poppins Thin" }}>
						<i>
							Just an idea I thought I would share on how to make education more
							accessible. It is by no means complete. But I challenge anyone one
							who wants to build on it to be my guest. For the benefit of the
							world!
						</i>
					</h4>
				</header>
				<div className={styles.content}>
					<ul>
						<li>
							<Button
								text="Get started with Google"
								onClick={handleGoogleSignup}
								customStyle={{
									background: "white",
									width: "275px",
								}}
								img={{ src: google_logo, alt: "Google logo" }}
							/>
						</li>
						<li>
							<Button
								text="Get started with Apple"
								onClick={handleAppleSignup}
								customStyle={{
									background: "black",
									color: "white",
									filter: "brightness(0.85)",
									width: "275px",
								}}
								img={{ src: apple_logo, alt: "Apple logo" }}
							/>
						</li>

						<li>
							<Button
								text="Get started with Email"
								onClick={handleEmailSignup}
								customStyle={{
									background: "#CFD8DC",
									color: "black",
									width: "275px",
								}}
								img={{ src: email_icon, alt: "Email icon" }}
							/>
						</li>

						<li>
							<Button
								text="Get started with phone"
								onClick={handlePhoneSignup}
								customStyle={{
									background: "#CFD8DC",
									color: "black",
									width: "275px",
								}}
								img={{
									src: phone_logo,
									alt: "Phone icon",
								}}
							/>
						</li>
					</ul>
				</div>
			</div>
			<BottomStrip />
		</main>
	);
};

export default Signup;
