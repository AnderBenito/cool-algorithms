import { Box } from "@chakra-ui/react";
import React from "react";
import Bar from "../../components/atoms/Bar";
import { Trace } from "../../utils/algorithms/sorting/helpers";
import styles from "./index.module.css";

interface Props {
	animation: Trace;
}

const SortingVisualizerContainer: React.FC<Props> = ({ animation }) => {
	return (
		<Box
			bg={"gray.400"}
			padding="0 16px"
			className={styles["visualizerContainer"]}
		>
			{animation &&
				animation.state.map((value, index) => {
					let isComparing = animation.compare.includes(index);
					let isSwapping = animation.swap.includes(index);
					return (
						<Bar
							key={index}
							value={value}
							isComparing={isComparing}
							isSwapping={isSwapping}
						></Bar>
					);
				})}
		</Box>
	);
};

export default SortingVisualizerContainer;
