import { ActionCreator } from 'redux';
import { LOAD_PREV_ITEM, LOAD_NEXT_ITEM } from '../actionTypes/assessmentActionTypes';
import { TargetModule, UIAction } from '../../interfaces/stateMachine/UIAction';

// action type interfaces
export interface LoadPrevAssessmentAction extends UIAction {
  type: typeof LOAD_PREV_ITEM;
  handledIn: TargetModule;
}

export interface LoadNextAssessmentAction extends UIAction {
  type: typeof LOAD_NEXT_ITEM;
  handledIn: TargetModule;
}

/** action creators */
export const loadPrevAssessmentAction: ActionCreator<UIAction> = () => {
  return { type: LOAD_PREV_ITEM, handledIn: TargetModule.STORE };
};

export const loadNextAssessmentAction: ActionCreator<UIAction> = () => {
  return { type: LOAD_NEXT_ITEM, handledIn: TargetModule.STORE };
};

export default {
  loadPrevAssessmentAction,
  loadNextAssessmentAction,
};

export type AssessmentActions = LoadPrevAssessmentAction | LoadNextAssessmentAction;
