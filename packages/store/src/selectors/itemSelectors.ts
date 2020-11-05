import { createFeatureSelector, createSelector, select } from '../../RxJsSelectors/selector';
import { AppState } from '../../interfaces/AppState';
import { appStateStream$ } from '../../store/storeConfig.dev';
import { RootItemConfig } from '../../interfaces/renderer/UIElement';

const Store2 = appStateStream$;

export const getItemState = createFeatureSelector<AppState, RootItemConfig>('itemState');
export const getItem$ = Store2.pipe(select(createSelector(getItemState, (state: RootItemConfig) => state)));
