import { createFeatureSelector, createSelector, select } from '../../RxJsSelectors/selector';
import { AppState } from '../../interfaces/AppState';
import { Assessment } from '../../interfaces/Assessment';
import { appStateStream$ } from '../../store/storeConfig.dev';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { getBookletStateSlice$ } from './bookletSelectors';

const Store2 = appStateStream$;

export const getAssessmentState = createFeatureSelector<AppState, Assessment>('assessmentState');

/** Block tracker */
export const getActiveBlockSequence = createSelector(
  getAssessmentState,
  (state: Assessment) => state.activeBlockSequence,
);
export const getBlockSequence$ = Store2.pipe(select(getActiveBlockSequence));
export const getActiveBlock$ = combineLatest([getBookletStateSlice$, getBlockSequence$]).pipe(
  map((item) => {
    return {
      blocks: item[0],
      index: item[1],
    };
  }),
);

/** Item Header tracker */
export const getActiveItemSequence = createSelector(
  getAssessmentState,
  (state: Assessment) => state.activeItemSequence,
);
export const getItemSequence$ = Store2.pipe(select(getActiveItemSequence));
