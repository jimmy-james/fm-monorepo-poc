import { ActionCreator } from 'redux';
import { CLEAR_ANSWER } from '../../actionTypes/responses/clearAnswerActionTypes';
import { TargetModule, UIAction } from '../../../interfaces/stateMachine/UIAction';
import { Element } from '../../../interfaces/stateMachine/SelectedResponse';

// action type interfaces
export interface ClearAnswerAction extends UIAction<Element> {
  type: typeof CLEAR_ANSWER;
  handledIn: TargetModule;
  payload: Element;
}

// action creators
export const clearAnswerAction: ActionCreator<UIAction<Element>> = (input: Element) => {
  return { type: CLEAR_ANSWER, payload: input };
};

export type ClearAnswerActions = ClearAnswerAction;
