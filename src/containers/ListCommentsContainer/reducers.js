import * as types from './types';

const initialState = {
	loading: false,
	error: null,
	success: false,
	commentsData: [],
};

export default function reducers(state = initialState, action) {
	switch (action.type) {
		case types.LOAD_COMMENTS_DATA_STARTED:
			return { ...state, loading: true };
		case types.LOAD_COMMENTS_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				success: true,
				commentsData: action.payload.commentsData,
			};
		case types.LOAD_COMMENTS_DATA_FAILURE:
			return { ...state, loading: false, error: action.payload.error };
		default:
			return state;
	}
}
