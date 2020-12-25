import React, { useEffect, useRef, useState } from "react";
import SortingController from "../../components/organisms/SortingController";
import Trace, { Animation } from "../../utils/trace";
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
	const [trace, setTrace] = useState<Trace>();
	const [numElem, setNumElem] = useState<number>(DEFAULT_LENGTH);
	const array = useRef<number[]>(genArray(DEFAULT_LENGTH));

	useEffect(() => {
		setTrace(sortingAlgorithm(array.current));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortingAlgorithm]);

	const generateArray = () => {
		let arr = genArray(numElem);
		array.current = arr;
		setTrace(sortingAlgorithm(arr));
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
			{trace && (
				<PlayingControllerContainer
					trace={trace}
					render={(animation: Animation) => (
						<SortingVisualizerContainer animation={animation} />
					)}
				/>
			)}
		</>
	);
};

export default SortingControllerContainer;
