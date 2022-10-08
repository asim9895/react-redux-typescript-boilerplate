export enum ActionTypes {
	SEARCH_REPOSTORIES_LOADING = 'search_repositories_loading',
	SEARCH_REPOSTORIES_ERROR = 'search_repositories_error',
	SEARCH_REPOSTORIES_SUCCESS = 'search_reposiories_success',
}

interface searchRepositoryLoadingActionTypes {
	type: ActionTypes.SEARCH_REPOSTORIES_LOADING;
}

interface searchRepositorySuccessActionTypes {
	type: ActionTypes.SEARCH_REPOSTORIES_SUCCESS;
	payload: string[];
}

interface searchRepositoryErrorActionTypes {
	type: ActionTypes.SEARCH_REPOSTORIES_ERROR;
	payload: string;
}

export type Action =
	| searchRepositoryLoadingActionTypes
	| searchRepositorySuccessActionTypes
	| searchRepositoryErrorActionTypes;
