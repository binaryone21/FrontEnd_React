import React from 'react';

/**
 * jsx 조건 분기 (2) - 조건식과 '&&' 연산자 사용
 *
 * {조건 && (조건이 참인 경우 출려갈 내용)}
 *
 * 조건이 거짓인 경우 표시되는 내용 없음
 */
const _03_If2 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>If2</h2>
            {isLogin === true && <p>로그인 되셨습니다.</p>}
        </div>
    );
};

export default _03_If2;