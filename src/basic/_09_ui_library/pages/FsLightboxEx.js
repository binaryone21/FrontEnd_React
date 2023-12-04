/**
 * FsLightBoxEx
 * 어떤 요소(img, button, a 등)를 클릭했을 때
 * 지정된 이미지, 영상 등을 모달 팝업으로 표시하는 기능
 *
 * https://fslightbox.comr/
 *
 * yarn add fslightbox-react
 *
 * [Youtube 썸네일]
 * - 동영상 배경 썸네일(480x360) : https://img.youtube.com/vi/영상코드/0.jpg
 * - 동영상 시작지점 썸네일(120x90) : https://img.youtube.com/vi/영상코드/1.jpg
 * - 동영상 중간지점 썸네일(120x90) : https://img.youtube.com/vi/영상코드/2.jpg
 * - 동영상 끝지점 썸네일(120x90) : https://img.youtube.com/vi/영상코드/3.jpg
 * - 고해상도 썸네일(1280x720) : https://img.youtube.com/vi/영상코드/maxresdefault.jpg
 * - 중간해상도 썸네일(640x480) : https://img.youtube.com/vi/영상코드/sddefault.jpg
 * - 고품질 썸네일(480x360) : https://img.youtube.com/vi/영상코드/hqdefault.jpg
 * - 중간품질 썸네일(320x180) : https://img.youtube.com/vi/영상코드/mqdefault.jpg
 * - 보통품질 썸네일(120x90) : https://img.youtube.com/vi/영상코드/default.jpg
 */
import React from 'react';

import styled from "styled-components";
import FsLightbox from 'fslightbox-react';

import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'
import img5 from '../assets/img/img5.png'

const FsLightboxExContainer = styled.div`
	color: black;
`;
const Button = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0 5px;
`;

const FsLightboxEx = React.memo(() => {
	// 단일 이미지를 사용할 경우 모달창 표시 여부에 대한 상태값
	const [singleToggle, setSingleToggle] = React.useState(false);

	// 복수 이미지를 사용할 경우 모달창 표시 여부와 몇 번째 이미지를 표시할지에 대한 상태값
	const [multiToggle, setMultiToggle] = React.useState({open: false, index: 1});

	// 단일 Youtube 영상을 사용할 경우 모달창 표시 유부에 대한 상태값
	const [youtubeToggle, setYoutubeToggle] = React.useState(false);

	// 복수 Youtube 영상을 사용할 경우 모달창 표시 여부와 몇 번째 영상을 표시할지에 대한 상태값
	const [youtubeMultiToggle, setYoutubeMultiToggle] = React.useState({open: false, index: 1});

	return (
		<FsLightboxExContainer>
			<h2>FsLightBox</h2>

			<h3>Single Gallery</h3>
			<div>
				<Button onClick={e => {setSingleToggle(!singleToggle)}}>
					<img src={img1} width="150" alt="img1" />
				</Button>
				<FsLightbox sources={[img1]} toggler={singleToggle} />
			</div>

			<h3>Multi Gallery</h3>
			<div>
				<Button onClick={e => setMultiToggle({open: !multiToggle.open, index: 1})}>
					<img src={img1} width="150" alt="img1" />
				</Button>
				<Button onClick={e => setMultiToggle({open: !multiToggle.open, index: 2})}>
					<img src={img2} width="150" alt="img2" />
				</Button>
				<Button onClick={e => setMultiToggle({open: !multiToggle.open, index: 3})}>
					<img src={img3} width="150" alt="img3" />
				</Button>
				<Button onClick={e => setMultiToggle({open: !multiToggle.open, index: 4})}>
					<img src={img4} width="150" alt="img4" />
				</Button>
				<Button onClick={e => setMultiToggle({open: !multiToggle.open, index: 5})}>
					<img src={img5} width="150" alt="img5" />
				</Button>
				<FsLightbox sources={[img1, img2, img3, img4, img5]} toggler={multiToggle.open} slide={multiToggle.index}/>
			</div>

			<h3>Youtube Single Link</h3>
			<div>
				<Button onClick={e => setYoutubeToggle(!youtubeToggle)}>
					<img src='https://img.youtube.com/vi/2mkOUrmsUmA/maxresdefault.jpg' width="150" alt="img1" />
				</Button>
				<FsLightbox toggler={youtubeToggle} sources={['https://www.youtube.com/watch?v=2mkOUrmsUmA']}/>
			</div>

			<h3>Youtube Multi Link</h3>
			<div>
				<Button onClick={e => setYoutubeMultiToggle({open: !youtubeMultiToggle.open, index: 1})}>
					<img src='https://img.youtube.com/vi/2mkOUrmsUmA/maxresdefault.jpg' width="150" alt="img1" />
				</Button>
				<Button onClick={e => setYoutubeMultiToggle({open: !youtubeMultiToggle.open, index: 2})}>
					<img src='https://img.youtube.com/vi/a_80o2lDYec/maxresdefault.jpg' width="150" alt="img2" />
				</Button>
				<Button onClick={e => setYoutubeMultiToggle({open: !youtubeMultiToggle.open, index: 3})}>
					<img src='https://img.youtube.com/vi/HmM-sN7HadA/maxresdefault.jpg' width="150" alt="img3" />
				</Button>
				<FsLightbox toggler={youtubeMultiToggle} sources={[
					'https://www.youtube.com/watch?v=2mkOUrmsUmA',
					'https://www.youtube.com/watch?v=a_80o2lDYec',
					'https://www.youtube.com/watch?v=HmM-sN7HadA'
				]} slide={youtubeMultiToggle.index}/>
			</div>
		</FsLightboxExContainer>
	);
});

export default FsLightboxEx;