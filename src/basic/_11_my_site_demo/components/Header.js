import React from 'react';
import styled from 'styled-components';
import * as colors from '../styles/colors';
import mq from '../styles/MediaQuery';

const HeaderContainer = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  // 메뉴 영역이므로 다른 요소보다 위에 떠 있어야 한다.
  z-index: 9999;
  
  // position: absolute 가 되면 사이즈를 명시해야 함
  width: 100%;
  
  .menu {
    // 메뉴 영역의 넓이 제한(1000 보다 작은 넓이에서는 100% 역할을 함)
    max-width: 1000px;
    margin: auto;
    display: flex;
    
    li {
      text-align: center;
      
      // 태블릿 사이즈 이하에서는 균등 분할
      ${mq.maxWidth('md')`
        width: 20%;
      `}
      
      &:last-child {
        margin-left: auto;
        
        span {
          display: none;
          
          // 태블릿 사이즈 이하에서는 검색 텍스트 표시
          ${mq.maxWidth('md')`
            display: block;
          `}
        }
      }
      
      a {
        display: block;
        font-size: 18px;
        font-weight: 500;
        padding: 20px;
        
        &:hover {
          background-color: ${colors.BLACK_OP};
        }
        
        span {
          margin-left: 10px;
          font-size: 17px;
          
          ${mq.maxWidth('md')`
            display: block;
            margin-top: 5px;
            margin-left: 0;
            font-size: 12px;
            font-weight: 400;
          `}
        }
      }
    }
  }
`;

const Header = React.memo(() => {
	return (
		<HeaderContainer>
			<ul className="menu">
				<li>
					<a href="#">
						<i className="fa fa-home"></i>
						<span>HOME</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-user"></i>
						<span>ABOUT</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-th"></i>
						<span>PORTFOLIO</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-envelope"></i>
						<span>CONTACT</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-search"></i>
						<span>SEARCH</span>
					</a>
				</li>
			</ul>
		</HeaderContainer>
	);
});

export default Header;