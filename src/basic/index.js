import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import App from "./App";
import App01 from "./_01_hello_react/App";
import App02 from "./_02_simple_spa/App";
import App03 from "./_03_jsx/App";
import App04 from "./_04_props/App";
import App05 from "./_05_styleSheet/App";
import App06 from "./_06_layout_demo/App";
import App07 from "./_07_hook_event/App";
import App08 from "./_08_ui_demo/App";
import App09 from "./_09_ui_library/App";

const BasicIndex = React.memo(() => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<App />}/>
				<Route path="/_01_hello_react/*" element={<App01 />}/>
				<Route path="/_02_simple_spa/*" element={<App02 />}/>
				<Route path="/_03_jsx/*" element={<App03 />}/>
				<Route path="/_04_props/*" element={<App04 />}/>
				<Route path="/_05_styleSheet/*" element={<App05 />}/>
				<Route path="/_06_layout_demo/*" element={<App06 />}/>
				<Route path="/_07_hook_event/*" element={<App07 />}/>
				<Route path="/_08_ui_demo/*" element={<App08 />}/>
				<Route path="/_09_ui_library/*" element={<App09 />}/>
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

export default BasicIndex;