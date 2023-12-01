/**
 * @filename: App.js
 * @description: 레이아웃 구성 컨테이너
 */

/** 패키지 참조 */
// 리액트 기본
import React from 'react';
// 라우팅 처리
import { Routes, Route } from 'react-router-dom';

// 모든 페이지 공용 컴포넌트
import Header from "./common/Header";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

// 페이지 -> import 대상 경로가 폴더 명일 경우 해당 폴더의 index.js 를 가져온다.
import Main from "./pages/Main";

const App = () => {
    return (
		<span>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" exact={true} element={<Main />} />
			</Routes>
			<Footer />
		</span>
    );
};

export default App;