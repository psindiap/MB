import './App.css';
import Form from './components/Form';
import Form2 from './components/Form2';
import Formn from './components/Formn';

import Form3 from './components/Form3';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Form/>,
  }, {
    path: "/form2",
    element: <Formn/>,
  },
  {
    path: "/form3",
    element: <Form3/>
  },
]);


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>

  );
}

export default App;
