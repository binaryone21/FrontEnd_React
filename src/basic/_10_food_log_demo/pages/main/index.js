/**
 * 메인 페이지
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';

// 화면 구성 컴포넌트
import FoodList from "./FoodList";
import AboutMe from "./AboutMe";

// 데이터셋 가져오기
import dataset from "../../dataset";

/** 이 컴포넌트에 대한 스타일 정의 */
const IndexContainer = styled.div`
  // 상단바에 가려지는 만큼 여백 확보
  padding-top: 57px;
  
  .divider {
    margin: 60px 0;
    width: auto;
    border-top: 1px solid #ddd;
    border-bottom: 0;
  }
`;

/** 컴포넌트 구현부 */
const Index = React.memo(() => {
	return (
		<IndexContainer>
			{/* import 한 데이터셋 중에서 필요한 부분을 각 컴포넌트에 전달한다. */}
			<FoodList data={dataset.foodList}/>

			<hr className="divider" />

			<AboutMe data={dataset.aboutMe}/>
		</IndexContainer>
	);
});

export default Index;