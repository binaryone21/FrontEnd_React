/**
 * 전역으로 적용될 기본 스타일
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

// 색상 변수 참조
import * as colors from './colors';
import mq from './MediaQuery';

/** 전역 스타일 시트를 정의한 객체 */
const GlobalStyles = createGlobalStyle`
  * {
	font-family: 'Noto Sans KR';
	box-sizing: border-box;
	font-size: 16px;
  }
  
	${ reset }
	
	body {
	  margin: 0;
	  padding: 0;
	}
	
	a {
	  text-decoration: none;
	  color: ${colors.BLACK}
	}
	
	.title {
	  width: 100%;
	  // vh 는 viewport 의 height 를 기준으로 한 %
	  height: 40vh;
	  display: flex;
	  background-size: cover;
	  background-position: center center;
	  background-attachment: fixed;
	  
	  .hello {
	    // display: flex 가 부모에게 적용되어 있다면 margin: auto 는 세로축으로 작용
	    margin: auto;
	    color: ${colors.WHITE};
	    text-align: center;
	    text-transform: uppercase;
	    padding: 30px 50px;
	    
	    ${mq.maxWidth('md')`
	       padding: 20px 30px;
	    `}
	    
	    h1 {
	      font-size: 36px;
	      font-weight: 600;
	      white-space: nowrap;
	      margin-bottom: 10px;
	      
	      ${mq.maxWidth('md')`
	        font-size: 26px;
	      `}
	    }
	    
	    p {
	      font-size: 20px;
	      font-weight: 300;
	      
	      ${mq.maxWidth('md')`
	        font-size: 16px;
	      `}
	    }
	  }
	}
`;
export default GlobalStyles;