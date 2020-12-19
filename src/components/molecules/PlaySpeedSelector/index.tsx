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
			maxW="200px"
			value={sortSpeed}
			options={options}
			handleSelect={setSortSpeed}
		/>
	);
};

export default PlaySpeedSelector;
