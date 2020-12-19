import { Select, SelectProps } from "@chakra-ui/react";
import React from "react";

interface Props {
	options: any[];
	handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const MySelect: React.FC<Props & SelectProps> = ({
	options,
	handleSelect,
	...props
}) => {
	return (
		<Select {...props} onChange={handleSelect}>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.viewValue}
				</option>
			))}
		</Select>
	);
};

export default MySelect;
