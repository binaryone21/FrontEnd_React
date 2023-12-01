import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import App from "./App";
import App01 from "./App";

const ReactForTheFirstTime = React.memo(() => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<App />}/>
				<Route path="/_01_hello_react/*" element={<App01 />}/>
				<Route path="/" element={<App />}/>
				<Route path="/" element={<App />}/>
				<Route path="/" element={<App />}/>
				<Route path="/" element={<App />}/>
				<Route path="/" element={<App />}/>
				<Route path="/" element={<App />}/>
				<Route path="/" element={<App />}/>
			</Routes>
		</div>
	);
});

export default ReactForTheFirstTime;