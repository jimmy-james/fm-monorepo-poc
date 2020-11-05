export interface Element {
  id: string;
}

export interface SelectedOption {
  id: string;
}

export interface SelectedResponse {
  input: Element;
  option: SelectedOption;
}
