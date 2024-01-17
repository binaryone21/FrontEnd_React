import React, { useCallback } from 'react';
import styled from 'styled-components';
import

const TopContainer = styled.div`
  from {
	background-color: #fff;
    align-content: center;
    border-bottom: 1px solid #eee;
    display: flex;
    border-top: 1px solid #eee;
    padding: 10px 0;
    margin: 0 0 20px 0;
    
    input, button {
      display: block;
      font-size: 16px;
      margin-right: 5px;
      padding: 5px 10px;
	  flex: none;
    }
    button {
      width: 70px;
    }
  }
`;

const Top = React.memo(() => {
	/** 입력폼의 submit 이벤트 */
	const onSearchSubmit = useCallback(e => {
		e.preventDefault();
	}, [])
	return (
		<TopContainer>
			<h1>Covid19 현황</h1>
			<form onSubmit={onSearchSubmit}>

			</form>
		</TopContainer>
	);
});

export default Top;