import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import MySelect from "../../components/atoms/MySelect";
import bubbleSort from "../../utils/algorithms/sorting/bubbleSort";
import SortingControllerContainer from "../SortingControllerContainer";
import { options } from "./options";

const SortingContainer: React.FC = () => {
	const [algo, setAlgo] = useState<any>(() => bubbleSort);
	return (
		<Box>
			<Text>Select Sorting Algorithm</Text>
			<MySelect handleSelect={setAlgo} options={options} value={algo} />
			<SortingControllerContainer sortingAlgorithm={algo} />
		</Box>
	);
};

export default SortingContainer;
