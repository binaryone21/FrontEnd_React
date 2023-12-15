import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MenuLink from "./components/MenuLink";
import Counter from "./pages/Counter";

const App = React.memo(() => {
	return (
		<div>
			<h1>15-Redux</h1>
			<nav>
				<MenuLink to='counter'>Counter</MenuLink>
			</nav>
			<hr />
			<Routes>
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</div>
	);
});

export default App;