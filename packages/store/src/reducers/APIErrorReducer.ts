import { ErrorActions } from '../actions/errorActions';
import * as ActionType from '../actionTypes/errorActionTypes';
import { initialAppState } from './initialState';
import { APIError } from '../../interfaces/APIError';
import { ErrorState } from '../../interfaces/ErrorState';

export const initialState = initialAppState.errorState;

export default function errorReducer(state = initialState, action: ErrorActions): ErrorState[] {
  switch (action.type) {
    case ActionType.API_ERROR:
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
