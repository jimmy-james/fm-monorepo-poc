import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthActions } from './authActions';
import { AppLoadingActions } from './appLoadingActions';
import { AssessmentActions } from './assessmentActions';
import { ItemActions } from './itemsActions';
import { ItemHeaderActions } from './itemHeaderActions';
import { BookletActions } from './bookletActions';
import { ToolbarActions } from './toolbarActions';
import { RootState } from './../reducers/index';

//App Level union types
export type AssessmentDeliveryActions =
  | AssessmentActions
  | AuthActions
  | AppLoadingActions
  | BookletActions
  | ItemActions
  | ItemHeaderActions
  | ToolbarActions;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
