import React from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import { useLocation, useNavigate } from 'react-router-dom';

const Department = React.memo(() => {
	// 현재 ajax 가 데이터를 로딩중인지를 의미하는 상태값
	const [loading, setLoading] = React.useState(false);
	// 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
	const [department, setDepartment] = React.useState([]);
	// 수정할 항목에 대한 id 값을 저장하기 위한 상태값
	const [updateId, setUpdateId] = React.useState(-1);

	// QueryString 으로 전달되는 검색 키워드를 받는다.
	const { search } = useLocation();
	const query = new URLSearchParams(search);
	const { keyword } = Object.fromEntries(query);

	// 페이지 강제 이동을 위한 객체 생성
	const navigate = useNavigate();

	// const [keyword, setKeyword] = React.useState('');

	/** 페이지가 처음 열렸을 때 실행할 hook */
	React.useEffect(() => {
		(async message => {
			// Ajax 로딩 시작을 알림 --> 함수형 업데이트
			setLoading(() => true);

			// ajax의 결과를 저장할 변수 준비
			let json = null;

			try {
				const response = await axios.get("/department", {
					// 검색어가 있다면 dname 값으로 설정, 그렇지 않으면 정의 안함
					params : keyword ? {dname : keyword} : null
				});
				json = response.data;
			} catch(e) {
				console.error(e);
				alert(`데이터 요청에 실패했습니다.\n${e.message}`);
				return;
			} finally {
				// Ajax 로딩 종료를 알림 --> 함수형 업데이트
				setLoading(() => false);
			}

			// Ajax 의 요청 결과를 상태값에 반영한다. --> 함수형 업데이트
			setDepartment(() => json);
		})();

		// 검색어가 변경되었을 경우에도 Ajax 요청을 보내도록 추가한다.
	}, [keyword]);

	/** 검색폼에서의 전송 이벤트 */
	// 성능 최적화를 위해 useCallback() 적용함
	const onSearchSubmit = React.useCallback(e => {
		e.preventDefault();
		console.log("submit~!!");
		navigate(`?keyword=${e.currentTarget.keyword.value.trim()}`);
		// setKeyword(e.currentTarget.keyword.value.trim());
	}, []);

	/** 데이터 추가 submit 이벤트 */
	const onDataAddSubmit = React.useCallback(e => {
		// 페이지 강제 이동을 차단
		e.preventDefault();

		// 이벤트가 발생한 폼 자신
		const form = e.currentTarget;

		// 폼안에 input 태그에 name 속성으로 접근하여 입력값 취득
		const dname = form.dname.value;
		const loc = form.loc.value;

		(async () => {
			// Ajax 로딩 시작을 알림 --> 함수형 업데이트
			setLoading(() => true);

			// ajax 의 결과를 저장할 변수 준비
			let json = null;

			try {
				const response = await  axios.post("/department", {
					// 입력값을 post 파라미터로 전달
					dname : dname,
					loc : loc
				});

				json = response.data;

				console.group("데이터 저장 결과");
				console.log(json);
				console.groupEnd();
			} catch(e) {
				console.error(e);
				alert(`데이터 저장에 실패했습니다ㅏ.\n${e.message}`);
				return;
			} finally {
				// Ajax 로딩 종료를 알림 --> 함수형 업데이트
				setLoading(() => false);
			}

			// Ajax 의 호출 결과를 상태값에 반영한다. --> 함수형 업데이트
			setDepartment((department) => department.concat(json));

			// 폼의 입력값을 리셋한다.
			form.reset();
		})();
	}, []);

	/** 데이터 삭제 버튼 click 이벤트 */
	const onDataDeleteClick = React.useCallback(e => {
		e.preventDefault();

		// 클릭된 자기 자신
		const current = e.currentTarget;
		// 클릭된 자신에게 숨어 있는 data-id 값을 추출
		const id = parseInt(current.dataset.id);
		console.log(`삭제 대상의 id값 : ${id}`);

		// 삭제 요청을 위한 Ajax 처리
		(async () => {
			// Ajax 로딩 시작을 알림 --> 함수형 업데이트
			setLoading(loading => true);

			try {
				// 삭제의 경우 Ajax 의 응답 결과가 필요 없다.
				await axios.delete(`/department/${id}`);
			} catch(e) {
				console.error(e);
				alert(`데이터 삭제에 실패했습니다.\n${e.message}`);
				return;
			} finally {
				// Ajax 로딩 종료를 알림 --> 함수형 업데이트
				setLoading(loading => false);
			}

			// Ajax 삭제처리가 완료되면 프론트엔드가 가지고 있던
			// 복사본 (department 상태값) 에서도 동일한 항목을 찾아 제거해야 한다.
			setDepartment(department => department.filter((v) => v.id !== id));
		})();
	}, []);

	/** 데이터 수정 버튼 click 이벤트 */
	const onDataEditClick = React.useCallback(e => {
		e.preventDefault();
		// 수정할 항목에 대한 인덱스 번호를 상태값으로 설정한다.
		const current = e.currentTarget;
		const id = parseInt(current.dataset.id);
		setUpdateId(id);
	}, []);

	/** 데이터 수정사항 저장 버튼 click 이벤트 */
	const onDataEditSubmit = React.useCallback(e => {
		e.preventDefault();

		// 이벤트가 발생한 <form> 요소 취득
		const current = e.target;

		// <form> 요소 내의 <input> 요소들을 name 속성값으로 접근하여 입력값을 얻음
		const id = current.id.value;
		const dname = current.dname.value;
		const loc = current.loc.value;

		// 백엔드에 데이ㅓ가 수정되었음을 알린다.
		(async () => {
			// Ajax 로딩 시작을 알림
			setLoading(true);

			// 수정 결과에 대한 json
			let json = null;

			// Ajax 를 통한 데이터 삭제 요청
			try {
				const response = await axios.put(`/department/${id}`, {
					dname: dname,
					loc: loc
				});

				// 수정 결과에 대한 json 을 받음
				json = response.data;

				console.group('데이터 수정 결과');
				console.log(json);
				console.groupEnd();
			} catch(e) {
				console.error(e);
				alert(`데이터 수정에 실패했습니다.\n${e.message}`);
				return;
			} finally {
				// Ajax 로딩 종료를 알림
				setLoading(false);
			}

			// 수정 결과로 원본 배열의 원소를 교체한다.
			setDepartment(department => {
				// 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
				const editId = department.findIndex((v, i) => v.id === json.id);
				console.log(`제거할 대상의 배열 인덱스 : ${json.id}`);

				// 상태값이 배열이므로 인덱스 번호가 editId 인 위치에서 1개의 데이터를 교체
				department.splice(editId, 1, json);

				// 수정된 배열을 리턴한다.
				return department;
			})
		})();

		// 상태변수를 되돌린다.
		setUpdateId(-1);
	}, []);

	return (
		<div>
			<Spinner loading={loading} />

			{/* 입력중 */}
			<form onSubmit={onDataAddSubmit}>
				<div>
					<label htmlFor="dname">학과 : </label>
					<input type="text" name="dname" id="dname" />
				</div>
				<div>
					<label htmlFor="loc">위치 : </label>
					<input type="text" name="loc" id="loc" />
				</div>
				<button type="submit">저장하기</button>
			</form>
			<hr />

			{/* 검색중 */}
			<form onSubmit={onSearchSubmit}>
				<input type="text" name="keyword" />
				<button type="submit" name="search">검색</button>
			</form>
			<hr />

			<form onSubmit={onDataEditSubmit}>
				<table border="`">
					<thead>
						<tr>
							<th>학과번호</th>
							<th>학과명</th>
							<th>학과위치</th>
							<th>수정</th>
							<th>삭제</th>
						</tr>
					</thead>
					<tbody>
						{!department.length ? (
							<tr>
								<td colSpan="5" align="center">검색결과가 없습니다.</td>
							</tr>
						) : (
							department.map((item, index) => {
								if(item.id === updateId) {
									return (
										<tr key={item.id}>
											{/* 수정을 위한 <input>요소를 표시 */}
											<td>
												<input type="hidden" name="id" defaultValue={item.id} />
												{item.id}
											</td>
											<td><input type="text" name="dname" defaultValue={item.dname} /></td>
											<td><input type="text" name="loc" defaultValue={item.loc} /></td>
											<td colSpan="2">
												<button type="submit">수정사항 저장</button>
											</td>
										</tr>
									)
								}
								return (
									<tr key={item.id}>
										{/* 데이터를 텍스트로 출력 */}
										<td>{item.id}</td>
										<td>{item.dname}</td>
										<td>{item.loc}</td>
										<td>
											<button type="button" data-id={item.id} onClick={onDataEditClick}>수정하기</button>
										</td>
										<td>
											<button type="button" data-id={item.id} onClick={onDataDeleteClick}>삭제하기</button>
										</td>
									</tr>
								)
							})
						)}
					</tbody>
				</table>
			</form>
		</div>
	);
});

export default Department;