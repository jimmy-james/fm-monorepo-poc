import * as apiCallsInFlightactionTypes from '../actionTypes/appLoadingActionTypes';
import { AppLoadingActions } from '../actions/appLoadingActions';
import { AppLoading } from '../../interfaces/AppLoading';
import { initialAppState } from './initialState';

export const initialState: AppLoading = initialAppState.appLoadingState;

const hasApiCallEnded = (actionType: string): boolean =>
  actionType.endsWith('SUCCESS') || actionType === apiCallsInFlightactionTypes.API_CALL_FAILURE;

export default function apiCallsInFlightReducer(state = initialState, action: AppLoadingActions): AppLoading {
  switch (action.type) {
    case apiCallsInFlightactionTypes.START_API_CALL:
      return { ...state, apiCallsInFlightCount: state.apiCallsInFlightCount + 1 };
    case apiCallsInFlightactionTypes.API_CALL_ENDED:
      return { ...state, apiCallsInFlightCount: state.apiCallsInFlightCount - 1 };
    default:
      return hasApiCallEnded(action.type)
        ? { ...state, apiCallsInFlightCount: state.apiCallsInFlightCount - 1 }
        : state;
  }
}
