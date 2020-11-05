import { ClearAnswerActions } from './clearAnswerActions';
import { DropdownActions } from './dropdownActions';
import { MultipleSelectActions } from './multipleSelectActions';
import { SingleSelectActions } from './singleSelectActions';
import { ZonesActions } from './zonesActions';

export type ResponsesActions =
  | ClearAnswerActions
  | DropdownActions
  | MultipleSelectActions
  | SingleSelectActions
  | ZonesActions;
