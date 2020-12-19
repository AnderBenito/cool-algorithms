import React from "react";
import MySelect from "../../atoms/MySelect";
import { options } from "./options";

interface Props {
	sortSpeed: number;
	setSortSpeed: any;
}
const PlaySpeedSelector: React.FC<Props> = ({ setSortSpeed, sortSpeed }) => {
	return (
		<MySelect
			placeholder="Animation speed"
			value={sortSpeed}
			options={options}
			handleSelect={(e) => setSortSpeed(e.target.value)}
		/>
	);
};

export default PlaySpeedSelector;
