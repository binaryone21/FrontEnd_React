import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MenuLink from "./components/MenuLink";
import Counter from "./pages/Counter";
import Department from "./pages/Department";
import News from "./pages/News";
import MovieRank from "./pages/MovieRank";
import ImageSearch from "./pages/ImageSearch";

const App = React.memo(() => {
	return (
		<div>
			<h1>15-Redux</h1>
			<nav>
				<MenuLink to='counter'>Counter</MenuLink>
				<MenuLink to='department'>Department</MenuLink>
				<MenuLink to='news'>News</MenuLink>
				<MenuLink to='movieRank'>Movie Rank</MenuLink>
				<MenuLink to="image_search">Image Search</MenuLink>
			</nav>
			<hr />
			<Routes>
				<Route path="/counter" element={<Counter />} />
				<Route path="/department" element={<Department />} />
				<Route path="/news" element={<News />} />
				<Route path="/movieRank" element={<MovieRank />} />
				<Route path="/image_search" element={<ImageSearch />} />
			</Routes>
		</div>
	);
});

export default App;