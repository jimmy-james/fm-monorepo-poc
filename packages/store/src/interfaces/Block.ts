export interface Block {
  readonly id: number;
  readonly itemCount: number;
  readonly code: string;
  readonly time: number;
  readonly timeType: number;
  readonly title: string;
  readonly titleSp: string;
  readonly typeId: number;
  readonly typeName: string;
  readonly difficulty: string | null;
  readonly doesBlockUseTabs: boolean;
  readonly bonus: boolean;
  readonly readingPassageStimulusCount: number;
  readonly sequence: number;
}

export interface BlockStatus {
  blockTimeElapsed: string;
  isRouting: boolean;
}
