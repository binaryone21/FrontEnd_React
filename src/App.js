import React from "react";

const App = React.memo(() => {
	return (
		<div>
			<div><button onClick={() => window.location.href = "/basic"}>Basic</button></div>
			<div><button onClick={() => window.location.href = "/_react_for_the_first_time"}>처음 만난 리액트</button></div>

		</div>
	);
});

export default App;