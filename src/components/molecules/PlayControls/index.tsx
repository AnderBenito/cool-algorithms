import { Button, Flex } from "@chakra-ui/react";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
		<Flex>
			<Button onClick={onBack} variant="ghost">
				<FaChevronLeft />
			</Button>
			<Button onClick={isPlaying ? onStop : onPlay} borderRadius="100%">
				{isPlaying ? <FaPause /> : <FaPlay />}
			</Button>
			<Button onClick={onNext} variant="ghost">
				<FaChevronRight />
			</Button>
		</Flex>
	);
};

export default PlayControls;
