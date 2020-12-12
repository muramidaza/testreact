//App
export const selectLoading = store => store.app.loading;

export const selectError = store => store.app.error;

export const selectSuccess = store => store.app.success;

export const selectPostsInPage = store => store.app.postsInPage;

export const selectPostsData = store => store.app.postsData;

//paginator
const currentPage = store => store.router.location.pathname.split('/')[2] || 0;
export const selectCurrentPage = currentPage;

export const selectCountPages = store => store.listcontainer.countPages;

//OnePostPage
//export const selectSelectedPost = (store) => store.app.postsData[store.router.location.pathname.split('/')[2] || -1]

export const selectSelectedPostID = store => store.router.location.pathname.split('/')[2] || -1;

export const selectSelectedPost = (store) => {
	const postData = store.app.postsData;
	const selectedPost = store.router.location.pathname.split('/')[2] || -1;
	return postData[selectedPost];
}