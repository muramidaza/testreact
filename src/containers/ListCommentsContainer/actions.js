import {
	LOAD_COMMENTS_DATA_SUCCESS,
	LOAD_COMMENTS_DATA_FAILURE,
	LOAD_COMMENTS_DATA_STARTED,
} from './types';

export const loadData = (
	url, postID
) => {
	return dispatch => {
		dispatch(loadDataStarted());

		const URLstring = url + '/posts/' + postID  + '/comments';

		fetch(URLstring)
			.then(res => res.json())
			.then(data => {
				if (data && data.length > 0) {
					dispatch(loadDataSuccess(data));
				} else {
					dispatch(loadDataFailure('Комментариев нет'));
				}
			})
			.catch(err => {
				dispatch(loadDataFailure(err.message));
			});
	};
};

const loadDataSuccess = (commentsData) => ({
	type: LOAD_COMMENTS_DATA_SUCCESS,
	payload: {
		commentsData
	},
});

const loadDataStarted = () => ({
	type: LOAD_COMMENTS_DATA_STARTED,
});

const loadDataFailure = (error) => ({
	type: LOAD_COMMENTS_DATA_FAILURE,
	payload: { error },
});
