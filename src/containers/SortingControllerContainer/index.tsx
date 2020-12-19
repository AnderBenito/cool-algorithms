import React, { useEffect, useRef, useState } from "react";
import SortingController from "../../components/organisms/SortingController";
import { Trace } from "../../utils/algorithms/sorting/helpers";
import SortingVisualizerContainer from "../SortingVisualizerContainer";

const MAX_HEIGHT = 400;
const MIN_HEIGHT = 20;
const DEFAULT_LENGTH = 10;

interface Props {
	sortingAlgorithm: any;
}

const genArray = (numElem: number) => {
	let arr: number[] = [];
	for (let i = 0; i < numElem; i++) {
		arr[i] = Math.floor(Math.random() * MAX_HEIGHT + MIN_HEIGHT);
	}

	return arr;
};

const SortingControllerContainer: React.FC<Props> = ({ sortingAlgorithm }) => {
	const [step, setStep] = useState<number>(0);
	const [animations, setAnimations] = useState<Trace[]>([]);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [numElem, setNumElem] = useState<number>(DEFAULT_LENGTH);
	const [sortSpeed, setSortSpeed] = useState<number>(1);
	const intervalId = useRef<NodeJS.Timeout>();
	const array = useRef<number[]>(genArray(DEFAULT_LENGTH));

	useEffect(() => {
		console.log("Mounted");
		return () => {
			clearInterval(intervalId.current!);
		};
	}, []);

	useEffect(() => {
		resetAnimation();
		setAnimations(sortingAlgorithm(array.current));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortingAlgorithm]);

	useEffect(() => {
		//Finish animation
		if (step >= animations.length - 1) {
			clearInterval(intervalId.current!);
			setIsPlaying(false);
			console.log("Finish");
		}
	}, [step, animations.length]);

	const resetAnimation = () => {
		setStep(0);
		setIsPlaying(false);
		clearInterval(intervalId.current!);
	};
	const onRandomize = () => {
		generateArray();
		resetAnimation();
	};

	const generateArray = () => {
		let arr = genArray(numElem);
		array.current = arr;
		setAnimations(sortingAlgorithm(arr));
	};

	const onPlay = () => {
		if (step >= animations.length - 1) return;

		setIsPlaying(true);
		intervalId.current = setInterval(() => {
			setStep((step) => step + 1);
		}, 50 / sortSpeed);
	};

	const onStop = () => {
		clearInterval(intervalId.current!);
		setIsPlaying(false);
	};

	const onNext = () => {
		if (step < animations.length - 1 && !isPlaying) {
			setStep((step) => step + 1);
		}
	};
	const onBack = () => {
		if (step > 0 && !isPlaying) {
			setStep((step) => step - 1);
		}
	};
	return (
		<>
			<SortingVisualizerContainer animation={animations[step]} />
			<SortingController
				onPlay={onPlay}
				onRandomize={onRandomize}
				onStop={onStop}
				onNext={onNext}
				onBack={onBack}
				setNumElem={setNumElem}
				setSortSpeed={setSortSpeed}
				isPlaying={isPlaying}
				numElem={numElem}
				sortSpeed={sortSpeed}
			/>
		</>
	);
};

export default SortingControllerContainer;
