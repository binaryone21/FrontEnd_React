/**
 * SweetAlert2
 * ㅁㅔ시지 팝업창 라이브러리
 *
 * https://sweetalert2.github.io/
 *
 * yarn add sweetalert2 sweetalert2-react-content
 */
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import img1 from '../assets/img/img1.png';

const Button = styled.button`
  border: 1px solid #d5d5d5;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:hover {
    background-color: #aaa;
  }
  
  &:active {
    background-color: #ccc;
    transform: scale(0.9, 0.9);
  }
`;

const SweetAlert2Ex = React.memo(() => {
	const MySwal = withReactContent(Swal);

	// Promise 방식을 사용한 다이얼로그
	const onButton1Click = React.useCallback(() => {
		MySwal.fire({
			// 불필요한 항목은 삭제 가능함
			title: 'Promise',
			text: 'SweetAlert 을 활용한 메시지 박스 테스트 입니다.',
			icon: 'info',
			footer: '<a href="https://sweetalert2.github.io/">SweetAlert2 에 대해 궁금한가요?</a>'
		}).then(result => {
			console.debug(result);
			if(result.isConfirmed) {
				MySwal.fire('확인 버튼을 눌렀습니다.');
			}
		});
	}, []);

	// Async~Await 방식을 사용한 다이얼로그
	const onButton2Click = React.useCallback(async () => {
		const result = await MySwal.fire({
			title: 'Async Await',
			text: 'SweetAlert 을 활용한 메시지 박스 테스트 입니다.',
			// 아이콘 종류 --> success, error, warning, info, question
			icon: 'success',
			footer: '<a href="https://sweetalert2.github.io/">SweetAlert2 에 대해 궁금한가요?</a>'
		});

		console.debug(result);

		if(result.isConfirmed) {
			MySwal.fire('확인 버튼을 눌렀습니다.');
		}
	}, []);

	// 이미지 다이얼로그
	const onButton3Click = React.useCallback(async () => {
		const result = await MySwal.fire({
			imageUrl: img1,
			imageWidth: '95%',
			imageAlt: 'Photographic',
			title: 'My Photo',
			text: 'Hello?'
		});

		console.debug(result);

		if(result.isConfirmed) {
			MySwal.fire('혹인 버튼을 눌렀습니다.');
		}
	}, [])

	// 컨펌 다이얼로그
	const onButton4Click = React.useCallback(async () => {
		const result = await Swal.fire({
			title: '<strong style="color:#fff">HTML <u>example</u></strong>',
			icon: 'info',
			html: '<p style="color: #fff">You can use <b>bole text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags</p>',
			background: `url(${ img1 })`,
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: true,
			confirmButtonText: 'Confirm',
			cancelButtonText: 'Cancel'
		});

		console.debug(result);

		if(result.isConfirmed) {
			MySwal.fire('확인 번튼을 눌렀습니다.');
		} else if(result.isDismissed && result.dismiss === 'cancel') {
			MySwal.fire('취소 버튼을 눌렀습니다.');
		}
	}, []);

	// 버튼이 3개 배치된 다이얼로그
	const onButton5Click = React.useCallback(async () => {
		const result = await Swal.fire({
			icon : 'question',
			title : '확인',
			text : '변경사항을 저장하시겠습니까?',
			showDenyButton : true,
			showCancelButton : true,
			confirmButtonText : '확인',
			denyButtonText : '나중에',
			cancelButtonText : '취소'
		});

		console.debug(result);

		if(result.isConfirmed) {
			MySwal.fire('확인 버튼을 눌렀습니다.');
		} else if(result.isDenied) {
			MySwal.fire('나중에 버튼을 눌렀습니다.');
		} else if(result.isDismissed && result.dismiss === 'cancel') {
			MySwal.fire('취소 버튼을 눌렀습니다.');
		}
	}, []);

	return (
		<div>
			<Button onClick={onButton1Click}>Button1</Button>
			<Button onClick={onButton2Click}>Button2</Button>
			<Button onClick={onButton3Click}>Button3</Button>
			<Button onClick={onButton4Click}>Button4</Button>
			<Button onClick={onButton5Click}>Button5</Button>
		</div>
	);
});

export default SweetAlert2Ex;