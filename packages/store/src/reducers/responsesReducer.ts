import { ResponsesActions } from '../actions/responses';
import ResponseActionTypes from '../actionTypes/responses';
import { Responses } from '../../interfaces/Responses';
import { initialAppState } from './initialState';
import { insertItem, removeItem } from '../../util/arrayToggle';

export const initialState = initialAppState.responsesState;

export default function responsesReducer(state = initialState, action: ResponsesActions): Responses {
  switch (action.type) {
    /** Clear Answer */
    case ResponseActionTypes.CLEAR_ANSWER:
      const { id } = action.payload;

      Object.keys(state).forEach((key) => {
        if (key.includes(id)) {
          state = {
            ...state,
            [key]: {},
          };
        }
      });

      return state;
    /** Dropdown Responses */
    case ResponseActionTypes.DROPDOWN_CLICK:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isOpen: !state[action.payload.id] ? true : !state[action.payload.id].isOpen,
        },
      };
    case ResponseActionTypes.DROPDOWN_SELECT: {
      const { input, option } = action.payload;

      return {
        ...state,
        [input.id]: {
          ...state[input.id],
          selected: option.id,
        },
      };
    }
    case ResponseActionTypes.DROPDOWN_CLICK_OUTSIDE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isOpen: false,
        },
      };
    /** Multiple Select Responses */
    case ResponseActionTypes.MCMS_CLICK: {
      const { input, option } = action.payload;
      // selecting an eliminated value removes that value from the eliminated array.
      const stateSlice = state[input.id];
      let eliminatedArray = stateSlice && Array.isArray(stateSlice.eliminated) ? stateSlice.eliminated : [];
      let selectedArray = stateSlice && Array.isArray(stateSlice.selected) ? stateSlice.selected : [];
      const indexOfSelectedOptionId = selectedArray.indexOf(option.id);
      const indexOfEliminatedOptionId = eliminatedArray.indexOf(option.id);

      if (indexOfSelectedOptionId > -1) {
        selectedArray = removeItem(selectedArray, indexOfSelectedOptionId);
      } else {
        selectedArray = insertItem(selectedArray, option.id);
      }

      if (indexOfEliminatedOptionId > -1) {
        eliminatedArray = removeItem(eliminatedArray, indexOfEliminatedOptionId);
      }

      return {
        ...state,
        [input.id]: {
          ...state[input.id],
          selected: selectedArray,
          eliminated: eliminatedArray,
        },
      };
    }
    case ResponseActionTypes.MCMS_ELIMINATE: {
      const { input, option } = action.payload;
      // break this out into a set of util functions: arrayToggle.ts
      const stateSlice = state[input.id];
      let eliminatedArray = stateSlice && Array.isArray(stateSlice.eliminated) ? stateSlice.eliminated : [];
      let selectedArray = stateSlice && Array.isArray(stateSlice.selected) ? stateSlice.selected : [];
      const indexOfSelectedOptionId = selectedArray.indexOf(option.id);
      const indexOfEliminatedOptionId = eliminatedArray.indexOf(option.id);

      if (indexOfSelectedOptionId > -1) {
        selectedArray = removeItem(selectedArray, indexOfSelectedOptionId);
      }
      if (indexOfEliminatedOptionId === -1) {
        eliminatedArray = insertItem(eliminatedArray, option.id);
      } else {
        eliminatedArray = removeItem(eliminatedArray, indexOfEliminatedOptionId);
      }

      return {
        ...state,
        [input.id]: {
          ...state[input.id],
          eliminated: eliminatedArray,
          selected: selectedArray,
        },
      };
    }
    case ResponseActionTypes.MCMS_CLEAR:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          selected: [],
          eliminated: [],
        },
      };
    /** Single Select Responses */
    case ResponseActionTypes.MCSS_CLICK: {
      const { input, option } = action.payload;
      // selecting an eliminated value removes that value from the eliminated array.
      const stateSlice = state[input.id];
      let array = stateSlice && Array.isArray(stateSlice.eliminated) ? stateSlice.eliminated : [];
      const indexOfOptionId = array.indexOf(option.id);

      if (indexOfOptionId > -1 && array) {
        array = removeItem(array, indexOfOptionId);
      }

      return {
        ...state,
        [input.id]: {
          ...state[input.id],
          selected: option.id,
          eliminated: array,
        },
      };
    }
    case ResponseActionTypes.MCSS_ELIMINATE: {
      const { input, option } = action.payload;
      const stateSlice = state[input.id];
      let array = stateSlice && Array.isArray(stateSlice.eliminated) ? stateSlice.eliminated : [];
      array = insertItem(array, option.id);

      return {
        ...state,
        [input.id]: {
          ...state[input.id],
          eliminated: array,
          selected: state[input.id].selected === option.id ? null : state[input.id].selected,
        },
      };
    }
    case ResponseActionTypes.MCSS_CLEAR:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          selected: null,
          eliminated: [],
        },
      };
    /** Zones Responses */
    case ResponseActionTypes.ZONES_SELECT: {
      const { input, option } = action.payload;

      return {
        ...state,
        [input.id]: {
          selected: option.id,
        },
      };
    }
    case ResponseActionTypes.ZONES_CLEAR: {
      return {
        ...state,
        [action.payload.id]: {
          selected: null,
        },
      };
    }
    default:
      return state;
  }
}
