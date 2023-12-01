import React from "react";

const App = React.memo(() => {
	return (
		<div>
			<div><button onClick={() => window.location.href = "/basic"}>Basic</button></div>
			<div><button onClick={() => window.location.href = "/_처음_만난_리액트"}>처음 만난 리액트</button></div>

		</div>
	);
});

export default App;