import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";

const Form = styled.form`
  background-color: #fff;
  display: flex;
  padding: 5px 10px;
  margin: 0;
  
  input, button {
    display: block;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
    height: 30px;
  }
  
  input {
    flex: 1;
  }
  button {
    width: 70px;
    flex: none;
  }
`;

const SearchForm = React.memo(() => {
	// 페이지 이동을 위한 기능 생성
	const navigate = useNavigate();

	// QueryString 에서 query 라는 이름의 값을 추출
	const { query } = useQueryString();

	// 입력 요소에 연결할 참조변수
	const searchInput = React.useRef();

	/** 검색폼 전송 이벤트 */
	const onSearchSubmit = React.useCallback(e => {
		e.preventDefault();
		navigate(`${window.location.pathname}?query=${e.target.query.value}`);
	}, [navigate]);

	/** querystring 으로 전달된 'query' 값이 변경된 경우 */
	React.useEffect(() => {
		// 값이 존재한다면 입력요소의 value 값으로 설정한다.
		if(query) {
			searchInput.current.value = query;
		}
	}, [query]);

	return (
		<div>
			<Form onSubmit={ onSearchSubmit }>
				<input type="search" name="query" defaultValue={query} ref={searchInput} />
				<button type="submit">검색</button>
			</Form>
			<hr />
		</div>
	)
});

export default SearchForm;