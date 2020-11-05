import { createFeatureSelector, createSelector, select } from '../../RxJsSelectors/selector';
import { AppState } from '../../interfaces/AppState';
import { ItemHeader } from '../../interfaces/ItemHeader';
import { appStateStream$ } from '../../store/storeConfig.dev';

const Store2 = appStateStream$;

export const getItemHeadersState = createFeatureSelector<AppState, ItemHeader[]>('itemHeadersState');
export const getItemHeaders$ = Store2.pipe(select(createSelector(getItemHeadersState, (state: ItemHeader[]) => state)));
