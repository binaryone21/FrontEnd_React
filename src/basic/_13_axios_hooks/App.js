import React from 'react';
import Titanic from "./pages/Titanic";

const App = React.memo(() => {
	return (
		<div>
			<h1>11-Axios-Hooks</h1>
			<Titanic />
		</div>
	);
});

export default App;