import React from 'react';

/**
 * jsx 반복 처리 (2) - return 문 안에서 map 함수 사용하기
 */
const _08_Loop3 = () => {
    const seasons = ['봄', '여름', '가을', '겨울'];

    return (
        <div>
            <h2>Loop3</h2>
            <table border="1">
                <tbody>
                    <tr>
                        {seasons.map((item, index) => {
                            return <td key={index}>{item}</td>;
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default _08_Loop3;