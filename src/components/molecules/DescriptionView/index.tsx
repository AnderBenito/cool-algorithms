import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Info } from "../../../utils/helpers";

interface Props {
	info: Info;
}
const DescriptionView: React.FC<Props> = ({ info }) => {
	return (
		<Box>
			<Text>{info.description}</Text>
			<Text>{info.cost}</Text>
		</Box>
	);
};

export default DescriptionView;
