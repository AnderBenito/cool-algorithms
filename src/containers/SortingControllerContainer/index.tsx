import React, { useEffect, useRef, useState } from "react";
import SortingController from "../../components/organisms/SortingController";
import { Trace } from "../../utils/algorithms/sorting/helpers";
import SortingVisualizerContainer from "../SortingVisualizerContainer";

interface Props {
	sortingAlgorithm: any;
}

const genArray = (numElem: number) => {
	let arr: number[] = [];
	for (let i = 0; i < numElem; i++) {
		arr[i] = Math.floor(Math.random() * 400);
	}

	return arr;
};

const SortingControllerContainer: React.FC<Props> = ({ sortingAlgorithm }) => {
	const [array, setArray] = useState<number[]>([]);
	const [step, setStep] = useState<number>(0);
	const [animations, setAnimations] = useState<Trace[]>([]);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [numElem, setNumElem] = useState<number>(10);
	const [sortSpeed, setSortSpeed] = useState<number>(1);
	const intervalId = useRef<NodeJS.Timeout>();

	useEffect(() => {
		console.log("Mounted");

		generateArray();
		return () => {
			clearInterval(intervalId.current!);
		};
	}, []);

	useEffect(() => {
		if (step >= animations.length - 1) {
			clearInterval(intervalId.current!);
			setIsPlaying(false);
		}
	}, [step, animations.length]);

	const onRandomize = () => {
		generateArray();
		setIsPlaying(false);
		setStep(0);
		clearInterval(intervalId.current!);
	};

	const generateArray = () => {
		let arr = genArray(numElem);
		setArray(arr);
		setAnimations(sortingAlgorithm(arr));
	};

	const onPlay = () => {
		setStep(0);
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
		setStep((step) => step + 1);
	};
	const onBack = () => {
		if (step > 0) {
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
