import {
	LOAD_DATA_SUCCESS,
	LOAD_DATA_FAILURE,
	LOAD_DATA_STARTED,
} from './types';

export const loadData = (
	url, postsInPage
) => {
	return dispatch => {
		dispatch(loadDataStarted());

		fetch(url + '/posts')
			.then(res => res.json())
			.then(data => {
				
				if (data && data.length > 0) {
					dispatch(
						loadDataSuccess(
							data,
							postsInPage
						)
					);

				} else {
					throw new Error('Постов нет');
				}
			})
			.catch(err => {
				console.log('error')
				dispatch(loadDataFailure(err.message));
			});
	};
};

const loadDataSuccess = (postsData, postsInPage) => ({
	type: LOAD_DATA_SUCCESS,
	payload: {
		postsData,
		postsInPage,
	},
});

const loadDataStarted = () => ({
	type: LOAD_DATA_STARTED,
});

const loadDataFailure = error => ({
	type: LOAD_DATA_FAILURE,
	payload: { error },
});
