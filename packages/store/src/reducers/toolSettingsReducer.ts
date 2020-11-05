import { ToolSetting } from './../../interfaces/ToolSettings';
import * as ActionType from '../actionTypes/toolbarActionTypes';
import { ToolSettingsActions } from '../actions/toolSettingsActions';
import { initialAppState } from './initialState';

export const initialState = initialAppState.toolSettings;

export default function toolSettingsReducer(
  state = initialState,
  action: ToolSettingsActions,
): ToolSetting[] | undefined {
  switch (action.type) {
    case ActionType.LOAD_TOOL_SETTINGS_SUCCESS:
      return action.payload;
    case ActionType.POST_TOOL_SETTINGS_SUCCESS:
      if (action.payload && state) {
        return [...state, action.payload];
      } else {
        if (action.payload) {
          return [action.payload];
        } else {
          return state;
        }
      }
    default:
      return state;
  }
}
