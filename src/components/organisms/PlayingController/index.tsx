import { Button, Container, Grid, GridItem } from "@chakra-ui/react";
import { FaSyncAlt } from "react-icons/fa";
import React from "react";
import PlayControls from "../../molecules/PlayControls";
import PlaySpeedSelector from "../../molecules/PlaySpeedSelector";

interface Props {
	onStop: any;
	onPlay: any;
	onNext: any;
	onBack: any;
	onReset: any;
	setSortSpeed: any;
	isPlaying: boolean;
	sortSpeed: number;
}

const PlayingController: React.FC<Props> = ({
	onPlay,
	onBack,
	onNext,
	onStop,
	onReset,
	setSortSpeed,
	isPlaying,
	sortSpeed,
}) => {
	return (
		<Container maxW="2xl" marginTop="1rem">
			<Grid templateColumns="repeat(3, 1fr)" justifyItems="center">
				<GridItem justifySelf="right">
					<Button onClick={onReset}>
						<FaSyncAlt />
					</Button>
				</GridItem>
				<GridItem>
					<PlayControls
						isPlaying={isPlaying}
						onBack={onBack}
						onNext={onNext}
						onPlay={onPlay}
						onStop={onStop}
					/>
				</GridItem>
				<GridItem justifySelf="left">
					<PlaySpeedSelector
						setSortSpeed={setSortSpeed}
						sortSpeed={sortSpeed}
					/>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default PlayingController;
