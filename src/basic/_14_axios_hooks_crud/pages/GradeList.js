import React from 'react';
import useAxios from "axios-hooks";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

const LinkContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  
  &:hover {
    background-color: #06f2;
  }
`;

const GradeList = React.memo(() => {
	/** 화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수 */
	const [grade, setGrade] = React.useState([]);

	/** 백엔드로부터 데이터 불러오기 */
	// 삭제를 위한 useAxios 와 구조분해 변수명이 겹치는 것을 방지하기 위해 변수이름을 loading1 으로 변경하여 처리
	const [{ data, loading:loading1, error }] = useAxios("/grade", {
		// 쓰기, 수정 페이지에 방문하여 데이터가 변경되더라도 다시 목록페이지로 돌아오면
		// Axios 는 캐시된 json 을 활용하기 때문에 데이터의 변경사항이 화면에 반영되지 않는다.
		// 이를 방지하기 위해 캐시를 사용하지 않도록 옵션으로 명시해야 한다.
		useCache : false
	});

	/** axios-hooks 에 의해 생성된 상태값인 data 가 변경되었을 때 (ajax 로딩이 완료되었을 때) 실행될 hook */
	React.useEffect(() => {
		// ajax 의 결과를 화면에 표시하기 위한 상태값에 복사한다.
		setGrade(data);
	}, [data]);

	/** 백엔드로부터 데이터 삭제하기 - 자체 캐시기능 방지, 삭제 버튼 이벤트에 의해 호출되어야 하므로 메뉴얼 실행 모드 */
	// 조회를 위한 useAxios 와 구조분해 변수명이 겹치는 것을 방지하기 위해 변수이름을 loading2로 변경하여 처리
	// 조회를 위한 useAxios 와 refetch 함수이름이 중복되는 것을 방지하려고 함수명을 sendDelete 로 변경
	const [{ loading:loading2 }, sendDelete ] = useAxios({
		method: 'DELETE'
	}, {
		useCache: false,
		manual: true
	});

	/** 삭제 버튼 클릭시 조회할 이벤트 헨들러 */
	const onDeleteClick = React.useCallback(e => {
		e.preventDefault();

		// 이벤트가 발생할 대상을 가져옴 --> 삭제하기 링크
		const current = e.target;

		// 클릭된 링크에 숨겨져 있는 일련번호와 학생이름 가져오기
		const id = parseInt(current.dataset.id);
		const name = current.dataset.name;

		// 삭제 확인
		if(window.confirm(`정말 ${name} 학생의 성적을 삭제하시겠습니까?`)) {
			// 백엔드에 삭제 요청하기 -> 입력, 수정, 삭제는 async-await 문법으로 처리해야 한다.
			(async () => {
				try {
					await sendDelete({ url : `/grade/${id}` });
				} catch(e) {
					console.error(e);
					window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
					return;
				}

				setGrade(currentDate => {
					// 삭제한 항복의 인덱스 조회
					const findIndex = currentDate.findIndex((v, i) => v.id === id);
					// 현재 상태값에서 삭제한 항목의 인덱스 위치부터 1개 데이터 삭제
					currentDate.splice(findIndex, 1);
					// 삭제된 결과를 리턴하여 화면에 출력중인 상태값에 반영.
					return currentDate;
				});
			})();
		}
	}, [sendDelete])
	return (
		<div>
			<Spinner loading={loading1 || loading2} />

			<LinkContainer>
				<TopLink to="add">성적 추가하기</TopLink>
			</LinkContainer>

			{ error ? (
				<div>
					<h1>Oops~!!! {error.code} Error.</h1>
					<hr />
					<p>{ error.message }</p>
				</div>
			) : (
				<Table>
					<thead>
						<tr>
							<th rowSpan="2">No.</th>
							<th rowSpan="2">이름</th>
							<th rowSpan="2">학년</th>
							<th rowSpan="2">성별</th>
							<th colSpan="4">과목별 점수</th>
							<th colSpan="2">집계</th>
							<th colSpan="2" rowSpan="2">수정/삭제</th>
						</tr>
						<tr>
							<th>국어</th>
							<th>영어</th>
							<th>수학</th>
							<th>과학</th>
							<th>총점</th>
							<th>평균</th>
						</tr>
					</thead>
					<tbody>
						{ grade && grade.map((v, i) => (
							<tr key={v.id}>
								<td>{v.id}</td>
								<td>{v.name}</td>
								<td>{v.level}</td>
								<td>{v.sex}</td>
								<td>{v.kor}</td>
								<td>{v.eng}</td>
								<td>{v.math}</td>
								<td>{v.sin}</td>
								<td>{v.kor + v.eng + v.math + v.sin}</td>
								<td>{(v.kor + v.eng + v.math + v.sin)/4}</td>
								<td>
									{/* 수정할 대상을 의미하는 id 값을 'edit' 라는 url 을 갖는 페이지에 path 파라미터로 전달 */}
									<NavLink to={`edit/${v.id}`}>수정</NavLink>
								</td>
								<td>
									{/* '#!'는 일반 html 페이지에서 <a> 태그에 적용하는 '#'과 동일 */}
									<a href="#!" data-id={v.id} data-name={v.name} onClick={onDeleteClick}>삭제</a>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
});

export default GradeList;