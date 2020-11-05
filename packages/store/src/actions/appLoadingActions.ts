import { Action } from 'redux';
import { START_API_CALL, API_CALL_FAILURE, API_CALL_ENDED } from '../actionTypes/appLoadingActionTypes';
import { UIAction, TargetModule } from '../../interfaces/stateMachine/UIAction';
// Usage: In each middleware for api calls, such as a thunk to implement side effects:
//          add a dispatch to the startApiCall action, as shown in thunk loadBooklets in bookletActions.ts
//          add a dispatch to the apiCallFailure action, as shown in thunk loadBooklets in bookletActions.ts in the catch block
//          In a component, to have a loading indicator:
//          use isLoading: state.apiCallsInFlightCount > 0 in mapDisptachToProps fn to test if any api call is in progress

//actions
// export interface StartAPICallAction extends Action {
//   type: typeof START_API_CALL;
// }
export interface StartAPICallAction extends UIAction {
  type: typeof START_API_CALL;
  handledIn: TargetModule;
}
// export interface APICallFailurAction extends Action {
//   type: typeof API_CALL_FAILURE;
// }
export interface APICallFailurAction extends UIAction {
  type: typeof API_CALL_FAILURE;
  handledIn: TargetModule;
}

// export interface APICallEndedAction extends Action {
//   type: typeof API_CALL_ENDED;
// }
export interface APICallEndedAction extends UIAction {
  type: typeof API_CALL_ENDED;
  handledIn: TargetModule;
}

//action creators
export const startApiCall = (): StartAPICallAction => {
  return { type: START_API_CALL, handledIn: TargetModule.STORE };
};
export const apiCallFailure = (): APICallFailurAction => {
  return { type: API_CALL_FAILURE, handledIn: TargetModule.STORE };
};
export const apiCallEnded = (): APICallEndedAction => {
  return { type: API_CALL_ENDED, handledIn: TargetModule.STORE };
};

//union types
export type AppLoadingActions = StartAPICallAction | APICallEndedAction | APICallFailurAction;
