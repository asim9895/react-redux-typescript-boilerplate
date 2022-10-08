import { Action, ActionTypes } from '../types/repositoriesTypes';

interface initialStateTypes {
	data: string[];
	error: string | null;
	loading: boolean;
}

const initialState: initialStateTypes = {
	data: [],
	loading: false,
	error: null,
};

export const repositoriesReducer = (
	state: initialStateTypes = initialState,
	actions: Action
): initialStateTypes => {
	switch (actions.type) {
		case ActionTypes.SEARCH_REPOSTORIES_LOADING:
			return {
				...state,
				loading: true,
				data: [],
				error: null,
			};
		case ActionTypes.SEARCH_REPOSTORIES_SUCCESS:
			return {
				...state,
				loading: false,
				data: actions.payload,
				error: null,
			};
		case ActionTypes.SEARCH_REPOSTORIES_ERROR:
			return {
				...state,
				loading: false,
				data: [],
				error: actions.payload,
			};
		default:
			return state;
	}
};
