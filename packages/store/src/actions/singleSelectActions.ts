import { Action } from 'redux';
import { MCSS_SELECT, MCSS_ELIMINATE, MCSS_CLEAR } from '../actionTypes/singleSelectActionTypes';

export interface MCSSSelectAction extends Action {
  type: typeof MCSS_SELECT;
  payload?: {
    optionId: string;
    inputId?: string;
  };
}

export interface MCSSEliminateAction extends Action {
  type: typeof MCSS_ELIMINATE;
  payload?: {
    optionId: string;
    inputId?: string;
  };
}

export interface MCSSClearAction extends Action {
  type: typeof MCSS_CLEAR;
  payload?: { inputId: string };
}

export const MCSSSelect = ({ optionId, inputId }: { optionId: string; inputId?: string }): MCSSSelectAction => {
  return {
    type: MCSS_SELECT,
    payload: {
      optionId,
      inputId,
    },
  };
};

export const MCSSEliminate = ({ optionId, inputId }: { optionId: string; inputId?: string }): MCSSEliminateAction => {
  return {
    type: MCSS_ELIMINATE,
    payload: {
      optionId,
      inputId,
    },
  };
};

export const MCSSClear = ({ inputId }: { inputId: string }): MCSSClearAction => {
  return {
    type: MCSS_CLEAR,
    payload: {
      inputId,
    },
  };
};

export type MCSSActions = MCSSSelectAction | MCSSEliminateAction | MCSSClearAction;
