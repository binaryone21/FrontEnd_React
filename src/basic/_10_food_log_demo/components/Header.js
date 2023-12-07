/**
 * 사이트 상단 영역 컴포넌트
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';

/** 이 컴포넌트에 대한 스타일 정의 */
const HeaderContainer = styled.header`
  // 그림자
  box-shadow: 0 1px 3px #0002;
  
  // 상단 고정
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9000;
  // 다른 영역위에 떠 있으므로 아래쪽에 스크롤되는 내용을 가리기 위해 배경색상 흰색 처리
  background-color: #fff;
  
  .container {
    // 아이템들의 배치 구성
    display: flex;
    justify-content: space-between;
    
    /** 양쪽의 아이콘 버튼 공통 속성 */
    .icon-button {
      font-size: 24px;
      font-weight: 900;
      padding: 16px;
      
      &:hover {
        background-color: #ddd;
        color: #fff;
      }
    }
    
    /** 사이트 제목 */
    .logo {
      font-size: 26px;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
  }
`;

/** 컴포넌트 구현부 */
const Header = React.memo(() => {
	return (
		<HeaderContainer>
			<div className="container">
				{/* 좌측 햄버거 버튼 */}
				<a href="#" className="icon-button left">
					<i className="fa-solid fa-bars"></i>
				</a>
				{/* 중앙 로고 */}
				<h1 className="logo">My Food</h1>
				{/* 우측 메일 버튼 */}
				<a href="#" className="icon-button right">
					<i className="fa-solid fa-envelope"></i>
				</a>
			</div>
		</HeaderContainer>
	);
});

export default Header;