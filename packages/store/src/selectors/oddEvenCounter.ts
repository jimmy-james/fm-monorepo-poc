import { createSelector, createFeatureSelector, select } from '../../RxJsSelectors/selector';
import { EvenCounterState, OddCounterState, EvenState, OddState, Counter } from '../../interfaces/OddEvenCounter';
import { AppState } from '../../interfaces/AppState';
import { appStateStream$ } from '../../store/storeConfig.dev';
import { withLatestFrom, combineLatest, map } from 'rxjs/operators';
//******************************************  Selector test */

const Store2 = appStateStream$;
//Even Counter Selector
export const getEvenCounterSlice = createFeatureSelector<AppState, EvenCounterState>('evenCounterState');
export const getEvenState = createSelector(getEvenCounterSlice, (state: EvenCounterState) => state.evenState);
export const getEven = createSelector(getEvenState, (state: EvenState) => state.even);
export const getCounter1 = createSelector(getEven, (state: Counter) => state.counter);

export const getEvenCounter = Store2.pipe(select(getCounter1));
//Odd counter selector
export const getOddCounterSlice = createFeatureSelector<AppState, OddCounterState>('oddCounterState');
export const getOddState = createSelector(getOddCounterSlice, (state: OddCounterState) => state.oddState);
export const getOdd = createSelector(getOddState, (state: OddState) => state.odd);
export const getCounter2 = createSelector(getOdd, (state: Counter) => state.counter);

export const getOddCounter = Store2.pipe(select(getCounter2));

//computed property:
//********************  the following selector works differently from the one after
// export const getSumOfEvenOddCounter = getEvenCounter.pipe(
//   withLatestFrom(getOddCounter, getEvenCounter),
//   map((counters) => counters[0] + counters[1]),
// );
export const getSumOfEvenOddCounter = getEvenCounter.pipe(
  combineLatest(getOddCounter),
  map((counters) => counters[0] + counters[1]),
);
