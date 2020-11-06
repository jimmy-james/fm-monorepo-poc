import { RootState } from '../reducers';

export const getCount = (state: RootState): number => state.counterState.count;
