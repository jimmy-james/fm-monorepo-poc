// import { ActionCreator, Action } from 'redux';
import { UIAction, UIActionCreator } from '../../UIAction';
import { ToolSetting } from '../../../ToolSettings';
import { Toolbar } from '../../../Toolbar';
import { ToolbarUIActionTypes } from '../uiActionTypes/toolbarUIActionTypes';

export interface ToolbarUIActions {
  type: ToolbarUIActionTypes;
  payload: Partial<ToolSetting | Toolbar>;
}
//TODO: the following interface is just to illustrate how payload interface are implemented
export interface ToolbarPayload {
  scratchOpen: boolean;
  timerOpen: boolean;
  toolId: number;
  isEnabled: boolean;
  toolName: string;
  configuration: string;
}

// UIAction creators

export const toolbarUIAction: UIActionCreator<UIAction<ToolbarPayload>> = (
  _type: ToolbarUIActionTypes,
  _payloadType: ToolbarPayload,
): ToolbarUIActions => {
  return { type: _type, payload: _payloadType };
};
