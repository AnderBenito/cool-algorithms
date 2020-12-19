import { Box, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	return (
		<Flex as="nav" bg="teal.500" padding="1.5rem">
			<Flex align="center" mr={5}>
				<Heading cursor="pointer">
					<Link to="/">Cool Algo</Link>
				</Heading>
			</Flex>

			<Flex align="center">
				<Text>
					<ChakraLink as={Link} to="/sorting">
						Sorting
					</ChakraLink>
				</Text>
			</Flex>
		</Flex>
	);
};

export default NavBar;
