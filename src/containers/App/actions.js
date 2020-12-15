import {
	LOAD_DATA_SUCCESS,
	LOAD_DATA_FAILURE,
	LOAD_DATA_STARTED,
} from './types';

export const loadData = (url, postsInPage) => {
	return dispatch => {
		dispatch(loadDataStarted());

		fetch(url + '/posts')
			.then(res => res.json())
			.then(data => {
				dispatch(loadDataSuccess(data));
			})
			.catch(err => {
				dispatch(loadDataFailure(err.message));
			});
	};
};

const loadDataSuccess = postsData => ({
	type: LOAD_DATA_SUCCESS,
	payload: { postsData },
});

const loadDataStarted = () => ({
	type: LOAD_DATA_STARTED,
});

const loadDataFailure = error => ({
	type: LOAD_DATA_FAILURE,
	payload: { error },
});
