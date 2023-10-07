
import React from 'react'
import { Box, Container,Tab,TabList,TabPanel,TabPanels,Tabs,Text } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'


// Box works similar to div
const Homepage = () => {
  return ( 
  <Container maxW={'xl'} centerContent>
     <Box
     d='flex'
     justifyContent= 'center'
     p={3}
     bg= 'white'
     width= '100%'
     margin= '40px 0 15px 0'
     borderRadius= 'lg'
     borderWidth='1px'
     >
        <Text fontSize='3xl' fontFamily='Work sans' color='black' textAlign='center'>ChatHub</Text>
     </Box>
     <Box bg='white' w='100%' p={4} borderRadius="lg" borderWidth="1px" color='black'>
     <Tabs variant='soft-rounded' >
  <TabList mb= '1em'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     {/* Login Component */}
      <Login />
    </TabPanel>
    <TabPanel>
      {/* Sign Up Component */}
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
     </Box>

  </Container>

  )
}

export default Homepage
