import React from 'react';

// 상태값을 로드하기 위한 hook 과 action 함수를 dispatch 함 hook 참조
import { useSelector, useDispatch } from "react-redux";

// Slice 에 정의된 액션함수들 참조
import { plus, minus } from '../slices/CounterSlice';

const Counter = React.memo(() => {
	// hook 을 통해 slice 가 관리하는 상태값 가져오기
	const { number, color } = useSelector(state => state.CounterSlice);

	// dispatch 함수 생성
	const dispatch = useDispatch();

	return (
		<div style={{ display : 'flex' }}>
			<button onClick={e => dispatch(plus(5))}>+5</button>
			<h2 style={{
				color: color,
				margin: '10px',
				width: '50px',
				textAlign : 'center'
			}}>{ number }</h2>
			<button onClick={e => dispatch(minus(3))}>-3</button>
		</div>
	);
});

export default Counter;