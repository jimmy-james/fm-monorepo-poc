import React, { ReactElement, Suspense, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Stack, Text } from '@coreym/benchmark';
import store from '@nextgen/store';

const Toolbar = React.lazy(() => import('ToolbarApp/Toolbar'));
const Renderer = React.lazy(() => import('ItemRendererApp/Renderer'));
console.log(store.selectors);
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
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Toolbar />
        <Stack p="4">
          <Text>THIS IS THE ASSESSMENT CONTAINER</Text>
          <Renderer />
          <button onClick={() => IncrementCounter()}>INCREMENT</button>
          <button onClick={() => DecrementCounter()}>DECREMENT</button>
          <Text>COUNT: {count}</Text>
        </Stack>
      </Suspense>
    </>
  );
};

export default Assessment;
