import { LuSun, LuMoon } from "react-icons/lu";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";

export default function Navbar(){
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Container maxW ={"900px"}>
            <Box bg={useColorModeValue("gray.400", "gray.700")} px={4} my={4} borderRadius={"5"}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    {/*Left Side */}
                    <Flex justifyContent={"center"} alignItems={"center"} gap ={3} display ={{base: "none", sm: "flex"}}>
                        <Text fontSize ={"40"} alignContent={"center"}>To Do List:</Text>
                    </Flex>

                    {/* Right Side */}
                    <Flex alignItems={"center"} gap ={3}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <LuMoon /> : <LuSun />}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    )
}