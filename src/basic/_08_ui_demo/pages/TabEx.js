import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const TabContainer = styled.div`
  .tab-button-group {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #fff;
    display: flex;
    
    .tab-button {
      display: block;
      background-color: inherit;
      min-width: 100px;
      box-sizing: border-box;
      border: none;
      outline: none;
      padding: 14px 16px;
      font-size: 17px;
      color: #222;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;
      
      &.hover {
        background-color: #ddd;
      }
      &.active {
        background-color: #ccc;
      }
    }
  }
  
  .tab-page {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
`;

/** 탭을 표시하기 위한 컨텐츠 데이터 */
const tabContent = [{
	id: 'newYork',
	subject: "NewYork",
	content: "NewYork is the capital city of US"
}, {
	id: 'london',
	subject: "London",
	content: "London is the capital city of England"
}, {
	id: 'paris',
	subject: "Paris",
	content: "Paris is the capital city of France"
}, {
	id: 'seoul',
	subject: "Seoul",
	content: "Seoul is the capital city of Korea"
}];

const TabEx = React.memo(() => {
	/** 현재 표시되고 잇는 탭의 인덱스 번호  */
	const [tabIndex, setTabIndex] = React.useState(0);

	/** 버튼에 대한 이벤트 처리 함수 */
	const onTabButtonCLick = React.useCallback( e => {
		e.preventDefault();
		const current = e.currentTarget;
		const href = current.getAttribute('href');
		console.log(href);

		setTabIndex(() => tabContent.findIndex(element => `#${element.id}` === href));
	}, []);

	/** tabIndex 값이 변경된 직후 실행된다. */
	// 리턴값에 대한 구조분해를 수핸한다.
	const { subject, content } = React.useMemo(() => {
		// tabContent 의 tabIndex 번째 항목을 리턴한다.
		// --> { id : ... , subject : ..., content : ... }
		return tabContent[tabIndex];
	}, [tabIndex]);

	return (
		<div>
			<h2>TabEx {tabIndex}</h2>

			<TabContainer>
				{/* Tab 버튼 그륩 */}
				<div className='tab-button-group'>
					{tabContent.map((v, i) => {
						// 조건부 className 적용하기 위한 객체 생성
						const cls = classnames({
							'tab-button' : true,
							'active' : i === tabIndex
						});

						return (
							<a key={i} className={cls} href={`#${v.id}`} onClick={onTabButtonCLick}>{v.subject}</a>
						)
					})}
				</div>

				{/* Tab 페이지 영역 */}
				<div className='tab-page'>
					<h3>{subject}</h3>
					<p>{content}</p>
				</div>
			</TabContainer>
		</div>
	);
});

export default TabEx;