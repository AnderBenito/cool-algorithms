import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
	onBack: any;
	onStop: any;
	onPlay: any;
	onNext: any;
	isPlaying: boolean;
}
const PlayControls: React.FC<Props> = ({
	isPlaying,
	onBack,
	onNext,
	onPlay,
	onStop,
}) => {
	return (
		<>
			<Button onClick={onBack}>Back</Button>
			{!isPlaying ? (
				<Button onClick={onPlay}>Play</Button>
			) : (
				<Button onClick={onStop}>Stop</Button>
			)}
			<Button onClick={onNext}>Next</Button>
		</>
	);
};

export default PlayControls;
