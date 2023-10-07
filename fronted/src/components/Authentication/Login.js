import React, { useState } from 'react'
import { Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

const Login = () => {

  const[show,setShow] = useState(false)
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
 
 
  const handleclick = () =>setShow(!show);

 
  const submitHandler = () => {};
return (
  <VStack spacing='5px' color='black'>
 

  <FormControl id='email' isRequired>
    <FormLabel>Email</FormLabel>
     <Input
       placeholder='Enter your Email'
       onChange={(e) => setEmail(e.target.value)}
     />
  </FormControl>

  <FormControl id='password' isRequired>
    <FormLabel>Password</FormLabel>
    <InputGroup>
      <Input
       type={show? "text" : "password"}
       placeholder='Enter your Password'
       onChange={(e) => setPassword(e.target.value)}
      />

      <InputRightElement width='4.5rem'>
          <Button h="1.75rem" size="sm" onClick={handleclick}>
              {show ? "Hide" : "Show"}
          </Button>
      </InputRightElement>
    </InputGroup>
    
  </FormControl>

  
  <Button
  colorScheme='blue'
  width='100%'
  textColor='black'
  onClick={submitHandler}>
      Login
  </Button>


 </VStack>
)
}

export default Login