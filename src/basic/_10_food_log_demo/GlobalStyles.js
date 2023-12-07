/**
 * 전역으로 적용될 기본 스타일
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

/** 전역 스타일 시트를 정의한 객체 */
const GlobalStyles = createGlobalStyle`
	${ reset }
	
	* {
	  font-family: 'Noto Sans KR';
	  box-sizing: border-box;
	}
	
	body {
	  margin: 0;
	  padding: 0;
	}
	
	a {
	  text-decoration: none;
	  color: #000;
	}
	
	.container {
	  max-width: 1200px;
	  margin: auto;
	}
`;
export default GlobalStyles;