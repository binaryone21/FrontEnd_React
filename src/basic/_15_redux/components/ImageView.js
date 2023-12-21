import React from 'react';
import noImg from '../assets/img/noImg.png';

const ImageView = React.memo((img) => {
	const onImgError = React.useCallback(e => {
		e.currentTarget.src = noImg;
	}, []);

	return (
		<img src={img.src || noImg} onError={onImgError} alt={img.alt} />
	);
});

export default ImageView;