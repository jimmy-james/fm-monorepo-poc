import { START_API_CALL, API_CALL_FAILURE } from './appLoadingActionTypes';
import { LOAD_NEXT_ITEM, LOAD_PREV_ITEM } from './assessmentActionTypes';
import { AUTH_STORE_TOKEN_SUCCESS } from './authActionTypes';
import { LOAD_BOOKLET_SUCCESS, LOAD_BOOKLET } from './bookletActionTypes';
import { API_ERROR } from './errorActionTypes';
import { LOAD_ITEM_SUCCESS, LOAD_PREV_ITEM_SUCCESS, LOAD_NEXT_ITEM_SUCCESS } from './itemsActionTypes';
import { LOAD_TOOL_SETTINGS_SUCCESS } from './toolbarActionTypes';

export const APP_ACTION_TYPES =
  LOAD_NEXT_ITEM ||
  LOAD_PREV_ITEM ||
  START_API_CALL ||
  API_CALL_FAILURE ||
  AUTH_STORE_TOKEN_SUCCESS ||
  LOAD_BOOKLET ||
  LOAD_BOOKLET_SUCCESS ||
  API_ERROR ||
  LOAD_ITEM_SUCCESS ||
  LOAD_PREV_ITEM_SUCCESS ||
  LOAD_NEXT_ITEM_SUCCESS ||
  LOAD_TOOL_SETTINGS_SUCCESS;
