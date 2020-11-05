export interface Responses {
  [inputId: string]: {
    [x: string]: string | number | boolean | null | string[];
  };
}
