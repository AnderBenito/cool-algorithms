import React, { useEffect, useRef, useState } from "react";
import PlayingController from "../../components/organisms/PlayingController";
import Trace from "../../utils/trace";

interface Props {
	render: any;
	trace: Trace;
}

function getProgressPercent(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	return (
		(e.clientX - e.currentTarget.getBoundingClientRect().left) /
		e.currentTarget.offsetWidth
	);
}

const PlayingControllerContainer: React.FC<Props> = ({ render, trace }) => {
	const [step, setStep] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [sortSpeed, setSortSpeed] = useState<number>(1);
	const intervalId = useRef<NodeJS.Timeout>();

	function getAnimationStep(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		let percentage = getProgressPercent(e);
		let nextStep = Math.floor(percentage * (trace.animations.length - 1));

		if (nextStep < 0) nextStep = 0;
		else if (nextStep >= trace.animations.length)
			nextStep = trace.animations.length - 1;
		setStep(nextStep);
	}

	useEffect(() => {
		console.log("Mounted");
		return () => {
			clearInterval(intervalId.current!);
		};
	}, []);

	useEffect(() => {
		resetAnimation();
	}, [trace]);

	useEffect(() => {
		//Finish animation
		if (step >= trace.animations.length - 1) {
			clearInterval(intervalId.current!);
			setIsPlaying(false);
			console.log("Finish");
		}
	}, [step, trace.animations.length]);

	const resetAnimation = () => {
		setStep(0);
		setIsPlaying(false);
		clearInterval(intervalId.current!);
	};

	const onPlay = () => {
		if (step >= trace.animations.length - 1) return;

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
		if (step < trace.animations.length - 1 && !isPlaying) {
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
			{render(trace.animations[step])}
			<PlayingController
				onPlay={onPlay}
				onStop={onStop}
				onNext={onNext}
				onBack={onBack}
				onReset={resetAnimation}
				progress={(step * 100) / (trace.animations.length - 1)}
				getAnimationStep={getAnimationStep}
				setSortSpeed={setSortSpeed}
				isPlaying={isPlaying}
				sortSpeed={sortSpeed}
			/>
		</>
	);
};

export default PlayingControllerContainer;
