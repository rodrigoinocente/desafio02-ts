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
        <Card inputValue={''} loginChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        } } loginButtonClick={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
