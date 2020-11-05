import { AppLoading } from './AppLoading';
import { Responses } from './Responses';
import { EvenCounterState, OddCounterState } from './OddEvenCounter';
import { Block } from './Block';
import { ItemHeader } from './ItemHeader';
import { ErrorState } from './ErrorState';
import { Assessment } from './Assessment';
import { RootItemConfig } from './renderer/UIElement';
import { ToolSetting } from './ToolSettings';

export interface AppState {
  appLoadingState: AppLoading;
  assessmentState: Assessment;
  bookletState: Block[];
  itemState: RootItemConfig;
  itemHeadersState: ItemHeader[];
  responsesState: Responses;
  evenCounterState: EvenCounterState;
  oddCounterState: OddCounterState;
  errorState: ErrorState[];
  toolSettings: ToolSetting[] | undefined;
}
