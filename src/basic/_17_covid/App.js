import React from 'react';
import Top from './components/Top';
import { Routes, Route } from 'react-router-dom';


const App = React.memo(() => {
	return (
		<div>
			<Top />
			<Routes>
				<Route path="/" element={<></>} />
			</Routes>
		</div>
	);
});

export default App;