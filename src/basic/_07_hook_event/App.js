import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuLink from "./components/MenuLink";

import MyState from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyReducer from "./pages/MyReducer";
import DateRange2 from "./pages/DateRange2";
import MyEffect from "./pages/MyEffect";
import MyRef from "./pages/MyRef";
import MyCallback from "./pages/MyCallback";
import MyMemo from "./pages/MyMemo";
import MyWidth from "./pages/MyWidth";

const App = () => {
    return (
		<div>
			<h1>07-hook-event</h1>
			<nav>
				{/* 1) useState 관련 예제 */}
				<MenuLink to='myState'>MyState</MenuLink>
				<MenuLink to='dataRange1'>DateRange1</MenuLink>

				{/* 2) useEffect 관련 예제 */}
				<MenuLink to='myEffect'>MyEffect</MenuLink>

				{/* 3) useRef 관련 예제*/}
				<MenuLink to='myRef'>MyRef</MenuLink>

				{/* 4) uesReducer 관련 예제 */}
				<MenuLink to="myReducer">MyReducer</MenuLink>
				<MenuLink to='dateRange2'>DateRange2</MenuLink>

				{/* 5) useMemo 관련 예제 */}
				<MenuLink to="myMemo">MyMemo</MenuLink>

				{/* 6) useCallback 관련 예제 */}
				<MenuLink to="myCallback">MyCallback</MenuLink>

				{/* 7) 커스텀 훅 관련 예제*/}
				<MenuLink to="myWidth">MyWidth</MenuLink>
			</nav>
			<hr/>

			<Routes>
				{/* 1) useState 관련 예제 */}
				<Route path="/myState" element={<MyState />} />
				<Route path="/dataRange1" element={<DateRange1 />} />

				{/* 2) useEffect 관련 예제 */}
				<Route path="/myEffect" element={<MyEffect />} />

				{/* 3) useRef 관련 예제 */}
				<Route path="/myRef" element={<MyRef />} />

				{/* 4) uesReducer 관련 예제 */}
				<Route path="/myReducer" element={<MyReducer />} />
				<Route path='/dateRange2' element={<DateRange2 />} />

				{/* 5) useMemo 관련 예제 */}
				<Route path="/myMemo" element={<MyMemo />} />

				{/* 6) useCallback 관련 예제 */}
				<Route path="/myCallback" element={<MyCallback />} />

				{/* 7) 커스텀 훅 관련 예제 */}
				<Route path="/myWidth" element={<MyWidth />} />
			</Routes>
		</div>
    );
};

App.propTypes = {

};

App.defaultProps = {

};

export default App;