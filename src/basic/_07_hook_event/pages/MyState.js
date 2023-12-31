import React from 'react';

const MyState = () => {
	/**
	 * state(상태)값 정의
	 * - 이 페이지 안에서 유효한 전역변수 같은 개념.
	 * - const [변수이름, 변수에대한 setter 함수] = React.useState(변수의기본값);
	 * - state 값은 직접 변경할 수 없고 반드시 setter 를 통해서만 변경 가능하다.
	 * - useState() 함수에 전달하는 값은 state 값에 대한 초기값이다.
	 */

	const [myName, setMyName] = React.useState('');
	const [myPoint, setMyPoint] = React.useState(50);

	/** 이벤트 헨들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다. */
	const onMyNameChange = e => {
		// e.currentTarget 은 jQuery 의 $(this)에 해당함.
		// 즉, 이벤트가 발생한 자신 (여기서는 input 태그)
		setMyName(e.currentTarget.value);
	};

	return (
		<div>
			<h2>MyState</h2>

			{/* state 값을 출력할 때는 단순히 변수값으로서 사용한다. */}
			<h3>{myName} 님의 점수는 {myPoint}점 입니다.</h3>

			<hr/>

			<div>
				<label htmlFor="myNameInput">이름 : </label>
				<input id="myNameInput" type="text" value={myName} onChange={onMyNameChange} />
			</div>

			<div>
				<label htmlFor="myPointInput">점수 : </label>
				<input
					id="myPointInput"
					type="range"
					min="0"
					max="100"
					value={myPoint}
					step="`"
					// 이벤트 헨들러를 익명 화살표 함수 형식으로 정의한 경우
					onChange={e => {
						setMyPoint(e.currentTarget.value);
					}}
				/>
			</div>
		</div>
	);
};

MyState.propTypes = {

};

MyState.defaultProps = {

};

export default MyState;