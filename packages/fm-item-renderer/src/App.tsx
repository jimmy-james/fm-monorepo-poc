/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { Box, Stack, Text } from '@coreym/benchmark';

const App: React.FC = (): ReactElement => {
  return (
    <Box border="2px solid green">
      <Stack>
        <Text css={{ color: 'green' }}>FM RENDERER in GREEN</Text> <Text>{}</Text>
      </Stack>
    </Box>
  );
};

export default App;
