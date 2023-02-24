import './App.css';
import Form from './components/Form';
import Form2 from './components/Form2';

import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <div className="App">
        <Form/>
    </div>
    </ChakraProvider>

  );
}

export default App;
