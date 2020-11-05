import { ToolSetting } from './../ToolSettings';
import { AppState } from './../AppState';
import { Block } from '../Block';
import { Element, SelectedResponse } from './SelectedResponse';

export type AppPayload2 =
  | Partial<Block>
  | ToolSetting
  | ToolSetting[]
  | Partial<AppState>
  | SelectedResponse
  | Element
  | number
  | string
  | number[]
  | string[]
  | undefined;
