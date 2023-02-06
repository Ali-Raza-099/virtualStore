import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
  Icon,
  Text,
  useColorMode,
  Button,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";

const links = [
  { linkName: "Products", path: "/products" },
  { linkName: "ShoppingCart", path: "/cart" },
];
const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const Navlink = ({ path, children }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  );
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems={"center"}>
              <Icon as={AiOutlineShop} />
              <Text fontWeight="extra-bold">Virtual Store</Text>
            </Flex>
          </Link>
        </HStack>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Navlink key={link.linkName} path={link.path}>
              {link.linkName}
            </Navlink>
          ))}
        </HStack>
        <Flex>
          <Icon
            as={colorMode === "light" ? MoonIcon : SunIcon}
            alignSelf="center"
            onClick={() => toggleColorMode()}
          />
          <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize="sm"
            fontWeight={400}
            variant="link"
          >
            Sign In
          </Button>
          <Button
            as={ReactLink}
            to="/register"
            p={2}
            display={{ base: "none", md: "inline-flex" }}
            fontSize="sm"
            fontWeight={600}
            variant="link"
            _hover={{ bg: "orange.400" }}
            bg="orange.500"
            color="white"
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <Navlink key={link.linkName} path={link.path}>
                {link.linkName}
              </Navlink>
            ))}
            <Navlink key={"signUp"} path="/register">
              Sign Up
            </Navlink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
