import React from "react";
import NavBar from "./components/organisms/NavBar";
import Routes from "./Routes";

const App: React.FC = () => {
	return (
		<>
			<NavBar />
			<Routes />
		</>
	);
};

export default App;
