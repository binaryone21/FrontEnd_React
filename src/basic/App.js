import React from "react";

const App = React.memo(() => {
	return (
		<div>
			<div><button onClick={() => window.location.href = "_01_hello_react"}>01-Hello-React</button></div>
			<div><button onClick={() => window.location.href = "_02_simple_spa"}>02-Simple-SPA</button></div>
			<div><button onClick={() => window.location.href = "_03_jsx"}>03-JSX</button></div>
			<div><button onClick={() => window.location.href = "_04_props"}>04-Props</button></div>
			<div><button onClick={() => window.location.href = "_05_styleSheet"}>05-StyleSheet</button></div>
			<div><button onClick={() => window.location.href = "_06_layout_demo"}>06-Layout-Demo</button></div>
			<div><button onClick={() => window.location.href = "_07_hook_event"}>07-Hook-Event</button></div>
			<div><button onClick={() => window.location.href = "_08_ui_demo"}>08-UI-Demo</button></div>
			<div><button onClick={() => window.location.href = "_09_ui_library"}>09-UI-Library</button></div>
			<div><button onClick={() => window.location.href = "_10_food_log_demo"}>10-Food-Log-Demo</button></div>
			<div><button onClick={() => window.location.href = "_11_my_site_demo"}>11-My-Site-Demo</button></div>
			<div><button onClick={() => window.location.href = "_12_simple_ajax"}>12-Simple-Ajax</button></div>
			<div><button onClick={() => window.location.href = "_13_axios_hooks"}>13-Axios-Hooks</button></div>
			<div><button onClick={() => window.location.href = ""}>...</button></div>
			<div><button onClick={() => window.location.href = ""}>...</button></div>
			<div><button onClick={() => window.location.href = ""}>...</button></div>
		</div>
	)
});

export default App;