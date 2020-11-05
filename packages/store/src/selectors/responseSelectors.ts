import { createFeatureSelector, select } from '../../RxJsSelectors/selector';
import { AppState } from '../../interfaces/AppState';
import { Responses } from '../../interfaces/Responses';
import { appStateStream$ } from '../storeConfig.dev';

const Store2 = appStateStream$;

export const getResponseState = createFeatureSelector<AppState, Responses>('responsesState');

export const getResponseStateSlice = Store2.pipe(select(getResponseState));
