import { ActionCreator } from 'redux';
import { UIAction } from '../../interfaces/stateMachine/UIAction';
import { LOAD_TOOL_SETTINGS_SUCCESS } from '../actionTypes/toolbarActionTypes';

// action type interfaces
export interface LoadToolSettingsSuccessAction extends UIAction {
  type: typeof LOAD_TOOL_SETTINGS_SUCCESS;
}

export const loadToolSettingsSuccess: ActionCreator<UIAction> = (): LoadToolSettingsSuccessAction => {
  return { type: LOAD_TOOL_SETTINGS_SUCCESS };
};

export type ToolbarActions = LoadToolSettingsSuccessAction;
