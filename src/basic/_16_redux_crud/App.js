import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DepartmentList from "./page/DepartmentList";
import DepartmentAdd from "./page/DepartmentAdd";
import DepartmentEdit from "./page/DepartmentEdit";
import DepartmentView from "./page/DepartmentView";

const App = React.memo(() => {
	return (
		<div>
			<h1>16-Redux-CRUD</h1>
			<hr />
			<Routes>
				<Route path="/" element={<DepartmentList />} />
				<Route path="/department_add" element={<DepartmentAdd />} />
				<Route path="/department_view/:id" element={<DepartmentEdit />} />
				<Route path="/department_edit/:id" element={<DepartmentView />} />
			</Routes>
		</div>
	);
});

export default App;