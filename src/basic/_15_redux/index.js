import React from 'react';
import App from './App';

/** 리덕스 구성을 위한 참조 */
import { Provider } from 'react-redux';
import store from './Store';

const Index15 = React.memo(() => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
});

export default Index15;