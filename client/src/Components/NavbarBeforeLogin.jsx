import { Box, Flex ,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";




export default function NavbarBeforeLogin({children}){
    


    return (
        <Box w="100vw" h="100vh" backgroundColor="gray.100">
           
            <Flex w="100%" h="10%" alignItems="center" justifyContent="center" gap="50px" fontSize="20px" backgroundColor="blue.400" color="white">
            <Text color="black" fontWeight="700" fontFamily="cursive">Authentication</Text>
                <Link to="/">Signup</Link>
                <Link to="/login">Login</Link>
            </Flex>
            <Box w="90vw" margin="auto" mt="30px">
                {children}
            </Box>
        </Box>
    )
}