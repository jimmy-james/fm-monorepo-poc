/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { Box, Text, Toolbar } from '@coreym/benchmark';

const App: React.FC = (): ReactElement => {
  return (
    <Box border="2px solid blue">
      <Text css={{ color: 'blue' }}>FM TOOLBAR in BLUE</Text>
      <Toolbar></Toolbar>
    </Box>
  );
};

export default App;
