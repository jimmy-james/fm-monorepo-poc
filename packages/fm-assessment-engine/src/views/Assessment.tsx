import React, { ReactElement, Suspense, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box, Button, Stack, Text } from '@coreym/benchmark';
import store from '@nextgen/store';
const Toolbar = React.lazy(() => import('ToolbarApp/Toolbar'));
const Renderer = React.lazy(() => import('ItemRendererApp/Renderer'));

const Assessment = (): ReactElement => {
  const { getCount } = store.selectors;
  const count = useSelector(getCount);
  function useActions(actions: any) {
    const dispatch = useDispatch();
    return useMemo(() => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    }, [actions, dispatch]);
  }
  const { IncrementCounter, DecrementCounter } = useActions(store.actions);
  return (
    <Box border="6px solid red">
      <Suspense fallback={<div>Loading...</div>}>
        <Toolbar />
        <Stack p="4">
          <Text css={{ color: 'red', fontWeight: 'bold' }}>FM ASSESSMENT in RED</Text>
          {/* <ItemRenderer /> */}
          <Button onClick={() => IncrementCounter()}>
            <Text css={{ color: 'pink' }}>INCREMENT COUNT</Text>
          </Button>
          <Button onClick={() => DecrementCounter()}>
            <Text css={{ color: 'pink' }}>DECREMENT COUNT</Text>
          </Button>
          <Text css={{ color: 'red', fontWeight: 'bold' }}>COUNT: {count}</Text>
          <Renderer />
        </Stack>
      </Suspense>
    </Box>
  );
};

export default Assessment;
