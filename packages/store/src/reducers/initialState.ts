import { AppState } from '../../interfaces/AppState';

export const initialAppState: AppState = {
  appLoadingState: { apiCallsInFlightCount: 0 },
  assessmentState: {
    activeBlockSequence: 0,
    activeItemSequence: 0,
  },
  bookletState: [
    {
      itemCount: 0,
      id: 0,
      code: '',
      title: '',
      time: 0,
      timeType: 0,
      typeId: 0,
      typeName: '',
      doesBlockUseTabs: false,
      bonus: false,
      difficulty: '',
      sequence: 0,
      titleSp: '',
      readingPassageStimulusCount: 0,
    },
  ],
  itemState: {
    type: '',
    accession: '',
    content: {
      element: undefined,
      props: undefined,
      children: [],
    },
  },
  itemHeadersState: [
    {
      id: 0,
      blockId: 0,
      accessionNumber: '',
      language: '',
      setLeaderItem: null,
      bilingualItem: {
        id: 0,
        blockId: 0,
        accessionNumber: '',
        language: '',
        setLeaderItem: '',
        bilingualItem: '',
        typeId: 0,
        isAnswered: '',
        sqCategory: 0,
        sqSubType: 0,
      },
      typeId: 0,
      isAnswered: false,
      sqCategory: 0,
      sqSubType: 0,
    },
  ],
  responsesState: {},
  // toolbarState: {
  //   scratchOpen: false,
  //   timerOpen: false,
  // },
  // rootItemConfig: { type: '', accession: '', content: { element: undefined, props: undefined, children: undefined } },
  evenCounterState: { evenState: { even: { counter: 0 } } },
  oddCounterState: { oddState: { odd: { counter: 1 } } },
  errorState: [],
  toolSettings: [],
};

export default initialAppState;
