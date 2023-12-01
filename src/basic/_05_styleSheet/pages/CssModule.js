import React from 'react';

/** CSS 모듈 참조 --> 참조변수 이름을 지정한다. */
import myStyles from '../assets/css/myStyle.module.css';

const CssModule = () => {
    return (
        <div>
            <h2>CssModule</h2>

            <h3>변수에 저장된 CSS 클래스</h3>
            <div className={myStyles.myCssBox} />
        </div>
    );
};

export default CssModule;