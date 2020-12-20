import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import ArrayLengthSelector from "../../molecules/ArrayLengthSelector";

interface Props {
	onRandomize: any;
	setNumElem: any;
	numElem: number;
}
const SortingController: React.FC<Props> = ({
	numElem,
	setNumElem,
	onRandomize,
}) => {
	return (
		<Flex>
			<Button
				onClick={() => {
					onRandomize(numElem);
				}}
			>
				Randomize
			</Button>
			<ArrayLengthSelector numElem={numElem} setNumElem={setNumElem} />
		</Flex>
	);
};

export default SortingController;
