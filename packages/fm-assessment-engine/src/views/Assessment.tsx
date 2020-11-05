import React, { ReactElement, Suspense } from 'react';
import { Stack, Text } from '@coreym/benchmark';
const Toolbar = React.lazy(() => import('ToolbarApp/Toolbar'));
const Renderer = React.lazy(() => import('ItemRendererApp/Renderer'));

const Assessment = (): ReactElement => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Toolbar />
        <Stack p="4">
          <Text>THIS IS ASSESSMENT CONTAINER</Text>
          <Renderer />
        </Stack>
      </Suspense>
    </>
  );
};

export default Assessment;
