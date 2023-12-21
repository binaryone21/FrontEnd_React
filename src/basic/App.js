import React from "react";
import { useNavigate } from "react-router-dom";

const App = React.memo(() => {
	const navigate = useNavigate();

	return (
		<div>
			<div><button onClick={() => navigate('_01_hello_react')}>01-Hello-React</button></div>
			<div><button onClick={() => navigate('_02_simple_spa')}>02-Simple-SPA</button></div>
			<div><button onClick={() => navigate('_03_jsx')}>03-JSX</button></div>
			<div><button onClick={() => navigate('_04_props')}>04-Props</button></div>
			<div><button onClick={() => navigate('_05_styleSheet')}>05-StyleSheet</button></div>
			<div><button onClick={() => navigate('_06_layout_demo')}>06-Layout-Demo</button></div>
			<div><button onClick={() => navigate('_07_hook_event')}>07-Hook-Event</button></div>
			<div><button onClick={() => navigate('_08_ui_demo')}>08-UI-Demo</button></div>
			<div><button onClick={() => navigate('_09_ui_library')}>09-UI-Library</button></div>
			<div><button onClick={() => navigate('_10_food_log_demo')}>10-Food-Log-Demo</button></div>
			<div><button onClick={() => navigate('_11_my_site_demo')}>11-My-Site-Demo</button></div>
			<div><button onClick={() => navigate('_12_simple_ajax')}>12-Simple-Ajax</button></div>
			<div><button onClick={() => navigate('_13_axios_hooks')}>13-Axios-Hooks</button></div>
			<div><button onClick={() => navigate('_14_axios_hooks_crud')}>14-Axios-Hooks-CRUD</button></div>
			<div><button onClick={() => navigate('_15_redux')}>15-Redux</button></div>
			<div><button onClick={() => navigate('')}>...</button></div>
		</div>
	)
});

export default App;