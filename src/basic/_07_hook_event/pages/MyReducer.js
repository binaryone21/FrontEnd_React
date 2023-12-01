import React from 'react';

/**
 * useReducer 에 의해 호출될 사용자 정의 함수
 * --> action 값이 '...' 일때 state 값을 ~~ 해라
 * --> action 값의 DataType 은 개발자가 결정할 수 있다. (int, string, boolean, json, ...)
 * --> state 값의 DataType 역시 개발자가 결정할 수 있다. (int, string, boolean, json, ...)
 */
function setCounterValue(state, action) {
	console.log("[%o], %o", action, state);

	// action 값의 상태에 따른 state 값의 가공 처리를 분기
	switch(action) {
		case "Up" :     return state+1;
		case "Down" :   return state-1;
		default :       return 0;
	}
}

const MyReducer = () => {
	/**
	 * 상태값(myCounter)와 상태값 갱신함수(setMyCounter)를 정의한다.
	 * -> setCounterValue: setMyCount()가 호출됨에 따라 간접적으로 호출될 함수
	 * -> 0: myCounter 에 저장될 초기값
	 *
	 * setMyCounter() 함수에게 action 값을 전달하면
	 * React 내부적으로 setCounterValue() 함수가 호출되며,
	 * 상태값으로 지정된 myCounter 와 "Up" | "Down" 가 파라미터로 전달된다.
	 */

	const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0);

	return (
		<div>
			<h2>MyReducer</h2>
			<p>현재 카운터 값: {myCounter}</p>
			<button type="button" onClick={e => setMyCounter("Up")}>Up</button>
			<button type="button" onClick={e => setMyCounter("Down")}>Down</button>
			<button type="button" onClick={e => setMyCounter("")}>Reset</button>
		</div>
	);
};

export default MyReducer;