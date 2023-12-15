import React from 'react';
import PropTypes from "prop-types";

/** 로딩바 컴포넌트 */
// --> https://mhnpd.github.io/react-loader-spinner/
import { Blocks } from 'react-loader-spinner';

const Spinner = React.memo(({ loading, width, height }) => {
	return (
		<Blocks
			visible={loading}
			width={width}
			height={height}
			ariaLabel="blocks-loading"
			wrapperStyle={{
				position: "fixed",
				zIndex: 9999,
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)'
			}}
			wrapperClass="blocks-wrapper"
		/>
	);
});

/** 기본값 정의 */
Spinner.defaultProps = {
	visiable : false,
	width: 100,
	height: 100
};

/** 데이터 타입 설정 */
Spinner.prototype = {
	visiable: PropTypes.bool.isRequired,
	width: PropTypes.number,
	height: PropTypes.number
};

export default Spinner;