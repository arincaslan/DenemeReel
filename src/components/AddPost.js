import { Box, Flex, Text } from "@chakra-ui/react";



const AddPost = () => {
    return (
        <div>
            <Flex p="4"  justifyContent="center" alignItems="center">
                <Box bg="cadetblue" p="50px" h="200px">
                    <Text color="green.800" fontFamily="sans-serif" fontWeight="semibold" fontSize="5xl">Coming Soon</Text>
                </Box>
            </Flex>
        </div>
    )
}

export default AddPost;