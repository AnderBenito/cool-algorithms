import React, { useEffect, useRef, useState } from "react";
import PlayingController from "../../components/organisms/PlayingController";
import { Trace } from "../../utils/helpers";

interface Props {
	render: any;
	animations: Trace[];
}

const PlayingControllerContainer: React.FC<Props> = ({
	render,
	animations,
}) => {
	const [step, setStep] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [sortSpeed, setSortSpeed] = useState<number>(1);
	const intervalId = useRef<NodeJS.Timeout>();

	useEffect(() => {
		console.log("Mounted");
		return () => {
			clearInterval(intervalId.current!);
		};
	}, []);

	useEffect(() => {
		resetAnimation();
	}, [animations]);

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
			{render(animations[step])}
			<PlayingController
				onPlay={onPlay}
				onStop={onStop}
				onNext={onNext}
				onBack={onBack}
				setSortSpeed={setSortSpeed}
				isPlaying={isPlaying}
				sortSpeed={sortSpeed}
			/>
		</>
	);
};

export default PlayingControllerContainer;
