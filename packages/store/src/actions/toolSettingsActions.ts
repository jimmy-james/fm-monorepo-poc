import { ToolSetting } from './../../interfaces/ToolSettings';
import { ActionCreator } from 'redux';
import {
  LOAD_TOOL_SETTINGS,
  LOAD_TOOL_SETTINGS_SUCCESS,
  POST_TOOL_SETTINGS,
  POST_TOOL_SETTINGS_SUCCESS,
} from '../actionTypes/toolbarActionTypes';
import { UIAction, TargetModule } from '../../interfaces/stateMachine/UIAction';

// action  interfaces
export interface LoadToolSettingsAction extends UIAction {
  type: typeof LOAD_TOOL_SETTINGS;
}

export interface LoadToolSettingsSuccessAction extends UIAction<ToolSetting[]> {
  type: typeof LOAD_TOOL_SETTINGS_SUCCESS;
  payload?: ToolSetting[];
}
export interface PostToolSettings extends UIAction {
  type: typeof POST_TOOL_SETTINGS;
  handledIn: TargetModule;
}
export interface PostToolSettingsSuccessAction extends UIAction<ToolSetting> {
  type: typeof POST_TOOL_SETTINGS_SUCCESS;
  payload: ToolSetting;
  handledIn: TargetModule;
}

//**********************   Test Post/ Patch/ PUT *

export const loadToolSettingsSuccess: ActionCreator<UIAction<ToolSetting[]>> = (toolSettings?: ToolSetting[]) => {
  return { type: LOAD_TOOL_SETTINGS_SUCCESS, payload: toolSettings, handledIn: TargetModule.STORE };
};
export const loadToolSettings: ActionCreator<UIAction> = () => {
  return { type: LOAD_TOOL_SETTINGS, handledIn: TargetModule.EFFECT };
};
//**********************  post test fro Block */
export const postToolSettingsSuccess: ActionCreator<UIAction<ToolSetting>> = (toolSetting?: ToolSetting) => {
  return { type: POST_TOOL_SETTINGS_SUCCESS, payload: toolSetting, handledIn: TargetModule.STORE };
};
export const postToolSettings: ActionCreator<UIAction<ToolSetting>> = (toolSetting: ToolSetting) => {
  return { type: POST_TOOL_SETTINGS, payload: toolSetting, handledIn: TargetModule.EFFECT };
};

export type ToolSettingsActions =
  | LoadToolSettingsSuccessAction
  | LoadToolSettingsSuccessAction
  | PostToolSettings
  | PostToolSettingsSuccessAction;
