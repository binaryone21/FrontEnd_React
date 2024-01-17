/**
 * slices/DepartmentSlice.js 에 대한 작업이 완료된 후 진행되어야 한다.
 */
import React, {useMemo} from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentData, getItem } from "../slices/DepartmentSlice";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";

const DepartmentView = React.memo(() => {
	/** path 파라미터 받기 */
	const { id } = useParams();

	/** 리덕스 관련 초기화 */
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector(state => state.DepartmentSlice);

	/** 데이터 가져오기 */
	React.useEffect(() => {
		dispatch(getCurrentData())
	}, []);

	/** data 값의 변경에 따른 사이드 이펙트 처리 */
	const item = useMemo(() => {
		if(data) {
			return data.find((v, i) => v.id === id);
		} else {
			// 새로 고침시 현재 데이터만 다시 로드함
			dispatch(getItem({id : id}));
		}
	})

	return (
		<div>
			<Spinner loading={loading} />

			{ error ? (
				<ErrorView error={error} />
			) : (
				item && (
					<div>
						<Table>
							<colgroup>
								<col width="120" />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<th>학과번호</th>
									<th>{item.id}</th>
								</tr>
								<tr>
									<th>학과이름</th>
									<th>{item.dname}</th>
								</tr>
								<tr>
									<th>학과위치</th>
									<th>{item.loc}</th>
								</tr>
							</tbody>
						</Table>
						<div style={{ textAlign:'center'}}>
							<NavLink to="/">목록</NavLink> |
							<NavLink to="/department_add">등록</NavLink> |
							<NavLink to={`/department_edit/${item.id}`}>수정</NavLink> |
							<NavLink to="#!">삭제</NavLink>
						</div>
					</div>
				)
			)}
		</div>
	);
});

export default DepartmentView;