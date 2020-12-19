import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/organisms/NavBar";
import Routes from "./Routes";

const App: React.FC = () => {
	return (
		<Router>
			<NavBar />
			<Routes />
		</Router>
	);
};

export default App;
