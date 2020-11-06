/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Box, Stack, Text } from '@coreym/benchmark';
// import SingleSelect from './components/SingleSelect';
import store from '@nextgen/store';
console.log('ACTIONS ', store.actions, store.store.getState());

const App: React.FC = (): ReactElement => {
  // function useActions(actions: any) {
  //   const dispatch = useDispatch();
  //   return useMemo(() => {
  //     if (Array.isArray(actions)) {
  //       return actions.map((a) => bindActionCreators(a, dispatch));
  //     }
  //     return bindActionCreators(actions, dispatch);
  //   }, [actions, dispatch]);
  // }
  // const { IncrementCounter, DecrementCounter } = useActions(store.actions);
  return (
    <Box>
      <Stack>
        <Text>RENDERER</Text>
        {/* <button onClick={() => IncrementCounter()}>INCREMENT</button>
        <button onClick={() => DecrementCounter()}>DECREMENT</button> */}
        <Text>{}</Text>
      </Stack>
    </Box>
  );
};

export default App;
