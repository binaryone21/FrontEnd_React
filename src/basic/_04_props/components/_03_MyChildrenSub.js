import React from 'react';

import PropTypes from 'prop-types';

const _03_MyChildrenSub = ({width, height, children}) => {
    /** CSS 속성값을 변수화 할 경우 JSON 객체로 구성한다. */
    const myStyle = {
        // 부모로부터 전달받은 props 에 포함된 값으로 width, height 결정
        width: width + 'px',
        height: height + 'px',
        border: '5px solid #d5d5d5',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#eee'
    };

    return (
        <div>
            <h3>MyChildrenSub</h3>
            {/* 부모 컴포넌트가 자신을 호출할 때 시작태그와 끝태그 사이에 명시하는 내용이 children 이다. */}
            <div style={myStyle}>{children}</div>
        </div>
    );
};

// 속성들에 대한 타입 정의
_03_MyChildrenSub.prototype = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.string
};

// 속성들에 대한 기본값을 JSON 으로 정의 (객체이름 고정)
_03_MyChildrenSub.defaultProps = {
    width: 300,
    height: 100,
    children: '내용이 없습니다.'
};

export default _03_MyChildrenSub;