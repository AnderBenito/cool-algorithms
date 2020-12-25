import { Container, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import MySelect from "../../components/atoms/MySelect";
import DescriptionView from "../../components/molecules/DescriptionView";
import bubbleSort from "../../utils/algorithms/sorting/bubbleSort";
import { Algo } from "../../utils/helpers";
import SortingControllerContainer from "../SortingControllerContainer";
import { options } from "./options";

const SortingContainer: React.FC = () => {
	const [algo, setAlgo] = useState<Algo>(() => bubbleSort);
	return (
		<Container maxW="6xl">
			<Text>Select Sorting Algorithm</Text>
			<MySelect handleSelect={setAlgo} options={options} value={algo as any} />
			<SortingControllerContainer sortingAlgorithm={algo.algo} />
			<DescriptionView info={algo.info} />
		</Container>
	);
};

export default SortingContainer;
