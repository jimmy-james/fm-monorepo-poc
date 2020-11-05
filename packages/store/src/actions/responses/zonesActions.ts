import { ActionCreator } from 'redux';
import { ZONES_SELECT, ZONES_CLEAR } from '../../actionTypes/responses/zonesActionTypes';
import { UIAction } from '../../../interfaces/stateMachine/UIAction';
import { SelectedResponse } from '../../../interfaces/stateMachine/SelectedResponse';

// action type interfaces
export interface ZonesSelectAction extends UIAction<SelectedResponse> {
  type: typeof ZONES_SELECT;
  payload: SelectedResponse;
}

export interface ZonesClearAction extends UIAction<Element> {
  type: typeof ZONES_CLEAR;
  payload: Element;
}

// action creators
export const zonesSelectAction: ActionCreator<UIAction<SelectedResponse>> = (payload: SelectedResponse) => {
  return { type: ZONES_SELECT, payload };
};

export const zonesClearAction: ActionCreator<UIAction<Element>> = (input: Element) => {
  return { type: ZONES_CLEAR, payload: input };
};

export type ZonesActions = ZonesSelectAction | ZonesClearAction;
