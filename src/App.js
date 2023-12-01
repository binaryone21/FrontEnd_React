import React from "react";

const App = React.memo(() => {
	return (
		<div>
			<div><button onClick={() => window.location.href = "/basic"}>Basic</button></div>

		</div>
	);
});

export default App;