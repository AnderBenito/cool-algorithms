import React from "react";
import MySelect from "../../atoms/MySelect";
import { options } from "./options";

interface Props {
	setNumElem: any;
	numElem: number;
}
const ArrayLengthSelector: React.FC<Props> = ({ setNumElem, numElem }) => {
	return (
		<MySelect
			placeholder="Array Length"
			maxW="200px"
			options={options}
			value={numElem}
			handleSelect={setNumElem}
		/>
	);
};

export default ArrayLengthSelector;
