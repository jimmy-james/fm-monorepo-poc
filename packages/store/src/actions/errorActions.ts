import { TargetModule, UIAction } from './../../interfaces/stateMachine/UIAction';
import { Action, ActionCreator } from 'redux';
import * as errorActionTypes from '../actionTypes/errorActionTypes';
import { APIError } from '../../interfaces/APIError';

//actions
export interface ErrorAction extends UIAction<APIError> {
  type: typeof errorActionTypes.API_ERROR;
  payload: APIError;
}
//action creators
export const errorAction: ActionCreator<Action> = (error: APIError) => {
  return { type: errorActionTypes.API_ERROR, payload: error, handledIn: TargetModule.STORE };
};

//union types
export type ErrorActions = ErrorAction;
