import { createFeatureSelector, createSelector, select } from '../../RxJsSelectors/selector';
import { AppState } from '../../interfaces/AppState';
import { ToolSettings, ToolSetting } from '../../interfaces/ToolSettings';
import { appStateStream$ } from '../../store/storeConfig.dev';
import { EMPTY } from 'rxjs';

const Store2 = appStateStream$;

export const getToolSettingsState = createFeatureSelector<AppState, ToolSetting[]>('toolSettings');
export const getToolSettings = Store2.pipe(
  select(createSelector(getToolSettingsState, (state: ToolSetting[]) => state)),
);
export const getFirstToolSetting = Store2.pipe(
  select(createSelector(getToolSettingsState, (state: ToolSetting[]) => (state.length > 0 ? state[0] : undefined))),
);
