import { Select, SelectProps } from "@chakra-ui/react";
import React from "react";

interface Props {
	options: any[];
	handleSelect: any;
}
const MySelect: React.FC<Props & SelectProps> = ({
	options,
	value,
	handleSelect,
	...props
}) => {
	return (
		<Select
			value={options.findIndex((option) => option.value === value)}
			onChange={(e) => {
				if (!e.target.value) return;
				handleSelect(() => options[parseInt(e.target.value)].value);
			}}
			{...props}
		>
			{options.map((option, index) => (
				<option key={index} value={index}>
					{option.viewValue}
				</option>
			))}
		</Select>
	);
};

export default MySelect;
