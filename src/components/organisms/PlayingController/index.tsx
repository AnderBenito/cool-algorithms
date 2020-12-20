import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import PlayControls from "../../molecules/PlayControls";
import PlaySpeedSelector from "../../molecules/PlaySpeedSelector";

interface Props {
	onStop: any;
	onPlay: any;
	onNext: any;
	onBack: any;
	setSortSpeed: any;
	isPlaying: boolean;
	sortSpeed: number;
}

const PlayingController: React.FC<Props> = ({
	onPlay,
	onBack,
	onNext,
	onStop,
	setSortSpeed,
	isPlaying,
	sortSpeed,
	children,
}) => {
	return (
		<Container maxW="6xl">
			<Grid templateColumns="repeat(2, 1fr)">
				{children}

				<GridItem>
					<PlayControls
						isPlaying={isPlaying}
						onBack={onBack}
						onNext={onNext}
						onPlay={onPlay}
						onStop={onStop}
					/>
				</GridItem>
				<GridItem>
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
