import axios from 'axios';
import { ActionTypes } from '../types/repositoriesTypes';

export const get_repositories = (term: string) => async (dispatch: any) => {
	try {
		dispatch({
			type: ActionTypes.SEARCH_REPOSTORIES_LOADING,
		});

		let output: any = await axios.get(
			`https://registry.npmjs.org/-/v1/search?text=${term}`
		);

		let refactored_data = output?.data?.objects?.map((d: any) => {
			return d.package.name;
		});

		dispatch({
			type: ActionTypes.SEARCH_REPOSTORIES_SUCCESS,
			payload: refactored_data,
		});
	} catch (error: any) {
		console.log(error);
		dispatch({
			type: ActionTypes.SEARCH_REPOSTORIES_ERROR,
			payload: error.message,
		});
	}
};
