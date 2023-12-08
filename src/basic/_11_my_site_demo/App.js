/**
 * 전체 레이아웃 구성
 */

/** 패키지 참조 */
import React from 'react';

// 전역 스타일 정의
import GlobalStyles from "./styles/GlobalStyles";

// <head> 태그 내의 <meta> 태그 정의 파일
import Meta from "./Meta";

// 라우팅 처리
import { Routes, Route } from 'react-router-dom';

// styled 컴포넌트
import styled from 'styled-components';

// 모든 페이지 공용 컴포넌트
import Header from "./components/Header";
import Footer from "./components/Footer";

// 페이지 -> import 대상 경로가 폴더 명일 경우 해당 폴더의 index.js 를 가져온다.
import Main from "./pages/main";

/** 이 컴포넌트에 대한 스타일 정의 */
const AppContainer = styled.div`
	
`;

/** 컴포넌트 구현부 */
const App = React.memo(() => {
	return (
		<span>
			<GlobalStyles />
			<Meta />
			<AppContainer>
				<Header />
				<Routes>
					<Route path="/" exaxt={true} element={<Main />} />
				</Routes>
				<Footer />
			</AppContainer>
		</span>
	);
});

export default App;