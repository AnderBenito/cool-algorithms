import { Select } from "@chakra-ui/react";
import React from "react";
import { options } from "./options";

interface Props {
	setNumElem: any;
	numElem: number;
}
const ArrayLengthSelector: React.FC<Props> = ({ setNumElem, numElem }) => {
	return (
		<Select
			placeholder="Array length"
			onChange={(e) => setNumElem(e.target.value)}
			value={numElem}
		>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.value}
				</option>
			))}
		</Select>
	);
};

export default ArrayLengthSelector;
