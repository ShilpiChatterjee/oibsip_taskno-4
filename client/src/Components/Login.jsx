import { Box, Button, Flex, FormControl, FormLabel, Input, Text, useToast ,Link} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




export default function Login() {
    const navigate = useNavigate();

    const toast = useToast()
    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setdata({
          ...data,
            [e.name]: e.value
        })
    }

    const handleSubmit = () => {
        axios.post("http://localhost:8000/user/login", data)
        .then((res)=>{
            toast({
                title: 'Login Successful.',
                description: "User Authenticated Successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
           
        })
        .catch((err)=>{
            toast({
                title: err.response.data,
                description: "Please Create Your Account Before Login.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
             navigate("/");
        })
    }


    return(
        <Box w={{sm:"90vw", lg:"30vw"}} border="1px solid #ccc" padding="20px" margin="auto" borderRadius="10px" backgroundColor="white">
            <Text fontSize="25px" mb="40px">Login</Text>
            <Flex direction="column" gap="20px" w="100%">
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email'  name="email" onChange={(e)=>handleChange(e.target)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder='Password' type="password"  name="password" onChange={(e)=>handleChange(e.target)} />
                </FormControl>
               <Button colorScheme="green" onClick={handleSubmit}>Login</Button>
            </Flex>
        </Box>
    )
}