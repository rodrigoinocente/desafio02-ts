import { Layout } from './components/Layout';
import { Card } from './components/Card';

import {
  ChakraProvider,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
