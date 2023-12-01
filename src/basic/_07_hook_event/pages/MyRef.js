import React from 'react';
import MyBox from '../components/MyBox.js';

/**
 * React 에서 document.getElementById(...)에 해당하는 기능을 사용하는 방법
 */
const MyRef = () => {
	// HTML 태그를 react 안에서 참조할 수 있는 변수를 생성
	const myName = React.useRef();
	const myLoc = React.useRef();
	const myResult = React.useRef();

	// 컴포넌트에 설정하기 위한 ref
	const myBoxRef = React.useRef();

	return (
		<div>
			<h2>MyRef</h2>
			<h3>ref 기본 사용 방법</h3>

			{/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
			<div>
				<label htmlFor="name">학과명 : </label>
				<input type='text' ref={myName} id="name" />
			</div>
			<div>
				<label htmlFor="loc">학과위치 : </label>
				<input type='text' ref={myLoc} id="loc" />
			</div>

			<p>입력값 확인 : <span ref={myResult}></span></p>

			<button onClick={e => {
				// 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근 가능
				// --> "참조변수.current" 해당 HTML 을 의미하는 Javascript DOM 객체
				// --> myName.current 와 document.querySelector(...), document.getElementById(...) 등으로 생성한 객체가 동일한 DOM 객체이다.
				console.log(myName);
				console.log(myLoc);

				const name = myName.current.value;
				const loc = myLoc.current.value;

				myResult.current.innerHTML = name + ", " + loc;
			}}>클릭</button>

			<hr />

			<h3>컴포넌트에 ref 적용하기</h3>

			{/* ref 참조변수를 컴포넌트에 전달한다. */}
			<MyBox ref={myBoxRef}/>

			<button type="button" onClick={() => {
				// <MyBox> 를 통해 myBoxRef 를 주입받은 DOM 에 접근하여 제어함.
				myBoxRef.current.style.backgroundColor = '#f00';
			}}>Red</button>

			<button type="button" onClick={() => {
				// <MyBox> 를 통해 myBoxRef 를 주입받은 DOM 에 접근하여 제어함.
				myBoxRef.current.style.backgroundColor = '#00f';
			}}>Blue</button>
		</div>
	);
};

export default MyRef;