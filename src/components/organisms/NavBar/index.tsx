import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const NavBar: React.FC = () => {
	return (
		<Flex as="nav" bg="teal.500" padding="1.5rem">
			<Flex align="center" mr={5}>
				<Heading as="a">Cool Algo</Heading>
			</Flex>
			<Box>
				<Text>Sorting</Text>
			</Box>
		</Flex>
	);
};

export default NavBar;
