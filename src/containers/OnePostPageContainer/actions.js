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

		fetch(url + '/posts/' + postID  + '/comments')
			.then(res => res.json())
			.then(data => {
				
				if (data && data.length > 0) {
					dispatch(
						loadDataSuccess(data)
					);

				} else {
					throw new Error('Комментариев нет');
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

const loadDataFailure = error => ({
	type: LOAD_COMMENTS_DATA_FAILURE,
	payload: { error },
});
