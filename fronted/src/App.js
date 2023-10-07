import { Button } from '@chakra-ui/react';
import {Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';
function App() {
  return (
    <div className="App">
      {/* <Button colorScheme='blue'>Button</Button> */}
      {/* exact will go at exact path */}
      <Route path='/' component={Homepage} exact/>
      <Route path= '/chats' component={Chatpage}/>
      
    </div>
  );
}
export default App;
