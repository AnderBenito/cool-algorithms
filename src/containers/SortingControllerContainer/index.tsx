import React, { useEffect, useRef, useState } from "react";
import SortingController from "../../components/organisms/SortingController";
import { Trace } from "../../utils/helpers";
import PlayingControllerContainer from "../PlayingControllerContainer";
import SortingVisualizerContainer from "../SortingVisualizerContainer";

interface Props {
	sortingAlgorithm: any;
}

const MAX_HEIGHT = 400;
const MIN_HEIGHT = 20;
const DEFAULT_LENGTH = 10;

const genArray = (numElem: number) => {
	let arr: number[] = [];
	for (let i = 0; i < numElem; i++) {
		arr[i] = Math.floor(Math.random() * MAX_HEIGHT + MIN_HEIGHT);
	}

	return arr;
};

const SortingControllerContainer: React.FC<Props> = ({ sortingAlgorithm }) => {
	const [animations, setAnimations] = useState<Trace[]>([]);
	const [numElem, setNumElem] = useState<number>(DEFAULT_LENGTH);
	const array = useRef<number[]>(genArray(DEFAULT_LENGTH));

	useEffect(() => {
		setAnimations(sortingAlgorithm(array.current));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortingAlgorithm]);

	const generateArray = () => {
		let arr = genArray(numElem);
		array.current = arr;
		setAnimations(sortingAlgorithm(arr));
	};
	const onRandomize = () => {
		generateArray();
	};
	return (
		<>
			<SortingController
				numElem={numElem}
				onRandomize={onRandomize}
				setNumElem={setNumElem}
			/>
			<PlayingControllerContainer
				animations={animations}
				render={(animation: Trace) => (
					<SortingVisualizerContainer animation={animation} />
				)}
			/>
		</>
	);
};

export default SortingControllerContainer;
