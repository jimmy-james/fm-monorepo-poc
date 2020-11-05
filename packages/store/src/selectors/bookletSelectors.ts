import { createFeatureSelector, select } from '../../RxJsSelectors/selector';
import { AppState } from '../../interfaces/AppState';
import { Block } from '../../interfaces/Block';
import { appStateStream$ } from '../../store/storeConfig.dev';

const Store2 = appStateStream$;

export const getBookletState = createFeatureSelector<AppState, Block[]>('bookletState');

export const getBookletStateSlice$ = Store2.pipe(select(getBookletState));
