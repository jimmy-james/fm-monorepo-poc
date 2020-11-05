export interface Counter {
  counter: number;
}
export interface EvenState {
  even: Counter;
}
export interface OddState {
  odd: Counter;
}

export interface EvenCounterState {
  evenState: EvenState;
}
export interface OddCounterState {
  oddState: OddState;
}
