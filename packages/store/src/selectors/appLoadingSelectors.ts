import { createFeatureSelector, createSelector, select } from '../../RxJsSelectors/selector';
import { AppState } from '../../interfaces/AppState';
import { AppLoading } from '../../interfaces/AppLoading';
import { appStateStream$ } from '../../store/storeConfig.dev';

const Store = appStateStream$;

export const getAppLoadingState = createFeatureSelector<AppState, AppLoading>('appLoadingState');

export const getIsAppLoading$ = Store.pipe(
  select(createSelector(getAppLoadingState, (state: AppLoading) => state.apiCallsInFlightCount > 0)),
);
