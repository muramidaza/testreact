import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore, { appHistory } from './configureStore';

const URL = 'https://jsonplaceholder.typicode.com';

const PostsInPage = 10;

const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
		<App
			url={URL}
			appHistory={appHistory}
			postsInPage={PostsInPage}
		/>
	</Provider>,
	document.getElementById('root')
);
