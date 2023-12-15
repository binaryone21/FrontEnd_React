import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
	name : 'CounterSlice',
	// 이 모듈이 관리하고자하는 상태값들을 명시
	initialState: {
		number: 0,
		color: '#000'
	},
	// 상태값을 갱신하기 위한 함수들을 구현
	// 컴포넌트에서 이 함수들을 호출할 때 전달되는 파라미터는 action.payload 로 전달된다.
	// initialState 와 동일한 구조의 JSON 을 리턴한다.
	reducers: {
		plus : (state, action) => {
			const numberValue = state.number + action.payload;
			return {
				number : numberValue,
				color: (numberValue > 0) ? '#2f77eb' : '#f60'
			};
		},
		minus : (state, action) => {
			const numberValue = state.number - action.payload;
			return {
				number : numberValue,
				color: (numberValue > 0) ? '#2f77eb' : '#f60'
			};
		}
	}
});

// 액션함수들 내보내기
export const { plus, minus } = CounterSlice.actions;

// 리듀서 객체 내보내기
export default CounterSlice.reducer;