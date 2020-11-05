export interface ToolSettings {
  [index: number]: ToolSetting;
}

export interface ToolSetting {
  id?: number;
  isEnabled: boolean;
  toolName: string;
  configuration: string;
}
