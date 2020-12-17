import { Select } from "@chakra-ui/react";
import React from "react";
import { options } from "./options";

interface Props {
	sortSpeed: number;
	setSortSpeed: any;
}
const PlaySpeedSelector: React.FC<Props> = ({ setSortSpeed, sortSpeed }) => {
	return (
		<Select
			placeholder="Animation Speed"
			onChange={(e) => setSortSpeed(e.target.value)}
			value={sortSpeed}
		>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.viewValue}
				</option>
			))}
		</Select>
	);
};

export default PlaySpeedSelector;
