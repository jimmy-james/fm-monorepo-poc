import { Dispatch, Action, ActionCreator } from 'redux';
import { JWT } from '../../interfaces/Auth';
import { AUTH_STORE_TOKEN_SUCCESS } from '../actionTypes/authActionTypes';
import { AppThunkAction } from '.';

// action type interfaces
export interface StoreTokenSuccessAction extends Action {
  type: typeof AUTH_STORE_TOKEN_SUCCESS;
  payload: JWT;
}

// action creators
export const storeTokenSuccess: ActionCreator<Action> = (token: JWT): StoreTokenSuccessAction => {
  return { type: AUTH_STORE_TOKEN_SUCCESS, payload: token };
};

// thunks
export const setJWT = (token: string | null | undefined): AppThunkAction => (dispatch: Dispatch) =>
  dispatch(storeTokenSuccess(token));

export default {
  setJWT,
};

export type AuthActions = StoreTokenSuccessAction;
