import React from "react";
import { useNavigate } from "react-router-dom";

const App = React.memo(() => {
	const navigate = useNavigate();

	return (
		<div>
			<div><button onClick={() => navigate('basic')}>Basic</button></div>
			<div><button onClick={() => navigate('_react_for_the_first_time')}>처음 만난 리액트</button></div>
			<div><button onClick={() => navigate('')}>...</button></div>

		</div>
	);
});

export default App;