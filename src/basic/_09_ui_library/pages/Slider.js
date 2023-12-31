/**
 * React Simple Image Slider
 *
 * https://github.com/kimcoder/react-simple-image-silder#readme
 *
 * yarn add react-simple-image-slider
 */
import React from 'react';
import ImageSlider from 'react-simple-image-slider';

import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'

const Slider = React.memo(() => {
	const images = [
		{ url : slide1 },
		{ url : slide2 },
		{ url : slide3 },
		{ url : slide4 }
	];

	return (
		<div>
			<ImageSlider
				width='100%'
				height={480}
				images={images}
				showNavs={true}
				showBullets={true}
				autoPlay={true}
				autoPlayDelay={2.0}
				loop={true}
				style={{margin: 'auto'}}
			/>
		</div>
	);
});

export default Slider;