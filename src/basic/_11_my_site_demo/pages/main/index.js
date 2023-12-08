import React from 'react';
import styled from 'styled-components';

import Introduce from "./introduce";
import Profile from "./Profile";
import Contact from "./Contact";

/** 이 컴포넌트에 대한 스타일 정의 */
// 컴포넌트의 이름이 소문자로 시작할 수 없다.
const IndexContainer = styled.div`
  background-color: #0f02;
  padding-top: 100px;
`;

const Index = React.memo(() => {
	return (
		<IndexContainer>
			<Introduce />
			<Profile />
			<Contact />
		</IndexContainer>
	);
});

export default Index;