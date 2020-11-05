export interface ItemHeader {
  id: number;
  blockId: number;
  accessionNumber: string;
  language: string;
  setLeaderItem: string | null;
  bilingualItem: {
    id: number;
    blockId: number;
    accessionNumber: string;
    language: string;
    setLeaderItem: string;
    bilingualItem: string;
    typeId: number;
    isAnswered: string;
    sqCategory: number;
    sqSubType: number;
  };
  typeId: number;
  isAnswered: boolean;
  sqCategory: number;
  sqSubType: number;
}
