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
			options={options}
			value={numElem}
			handleSelect={(e) => setNumElem(parseInt(e.target.value))}
		/>
	);
};

export default ArrayLengthSelector;
