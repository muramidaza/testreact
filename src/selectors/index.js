//App
export const selectLoading = store => store.app.loading;

export const selectError = store => store.app.error;

export const selectSuccess = store => store.app.success;

const getPostsData = store => store.app.postsData;

export const selectPostsData = getPostsData;

//paginator
export const selectCurrentPage = store => store.router.location.pathname.split('/')[2] || 0;

export const selectCountPages = store => store.listcontainer.countPages;

//OnePostPage

export const selectSelectedPostID = store =>
	store.router.location.pathname.split('/')[2] || -1;

export const selectSelectedPost = store => {
	const postData = getPostsData(store);
	const selectedPost = selectSelectedPostID(store);
	return postData[selectedPost];
};

//Comments

export const selectCommentsLoading = store => store.comments.loading;

export const selectCommentsError = store => store.comments.error;

export const selectCommentsSuccess = store => store.comments.success;

export const selectCommentsData = store => store.comments.commentsData;
