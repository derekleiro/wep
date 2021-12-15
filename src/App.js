import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import "./App.css";
import Boarding from "./pages/onboarding/boarding/Boarding";
import EmailSignup from "./pages/onboarding/emailSignup/EmailSignup";
import Signup from "./pages/onboarding/signup/Signup";
import particlesOptions from "./constants/particles.json";
import Dashboard from "./pages/dashboard/Dashboard";
import Unit from "./pages/unit/Unit";
import Video from "./pages/video/Video";
import Notes from "./pages/notes/Notes";
import Quiz from "./pages/quiz/Quiz";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Particles options={particlesOptions} style={{ zIndex: 3 }} />
				<Switch>
					<Route path="/" exact={true} component={Signup} />
					<Route path="/email" exact={true} component={EmailSignup} />
					<Route path="/boarding" exact={true} component={Boarding} />
					<Route path="/dashboard" exact={true} component={Dashboard} />
					<Route path="/unit" exact={true} component={Unit} />
					<Route path="/unit/video" exact={true} component={Video} />
					<Route path="/unit/notes" exact={true} component={Notes} />
					<Route path="/unit/quiz" exact={true} component={Quiz} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
