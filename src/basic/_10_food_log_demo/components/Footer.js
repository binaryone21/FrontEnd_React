/**
 * 사이트 하단 영역 컴포넌트
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';

// 이미지 참조
import workshop from '../assets/img/workshop.jpg';
import gondol from '../assets/img/gondol.jpg';

/** 이 컴포넌트에 대한 스타일 정의 */
const FooterContainer = styled.footer`
  border-top: 1px solid #ddd;
  
  .container {
    display: flex;
    
    /** footer 의 각 영역 비율 설정 */
    .footer-item {
      flex: 1;
      padding: 15px;
      
      /** 각 영역별 제목 */
      h3 {
        font-size: 24px;
        font-weight: 700;
        margin: 22px 0;
        text-transform: uppercase;
      }
      
      &:nth-child(1) {
        p {
          font-size: 15px;
          line-height: 150%;
          font-weight: 300;
        }
      }
      
      &:nth-child(2) {
        a {
          display: flex;
          margin: 20px 0;
          padding: 0 10px;
          
          img {
            width: 65px;
            height: 65px;
            object-fit: cover;
            margin-right: 10px;
          }
          
          .blog-post-title {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 15px;
          }
          
          .blog-post-content {
            line-height: 1.2;
          }
        }
      }
      
      &:nth-child(3) {
        .tags {
          li {
            display: inline-block;
            background-color: #616161;
            color: #fff;
            padding: 5px 10px;
            margin-bottom: 8px;
            margin-right: 5px;
            font-size: 13px;
          }
        }
      }
    }
  }
`;

/** 컴포넌트 구현부 */
const Footer = React.memo(() => {
	return (
		<FooterContainer>
			<div className="container">
				<div className="footer-item">
					<h3>FOOTER</h3>
					<p>Praesent tincidunt sed tellus ut retrum Praesent tincidunt sed tellus ut retrum Praesent tincidunt sed tellus ut retrum </p>
				</div>
				<div className="footer-item">
					<h3>BLOG POSTS</h3>
					<ul className="blog-posts">
						<li>
							<a href="#">
								<img src={workshop} />
								<div className="text-box">
									<h4 className="blog-post-title">Lorem</h4>
									<p className="blog-post-content">Sed mattis nunc Sed mattis nunc Sed mattis nunc Sed mattis nunc</p>
								</div>
							</a>
							<a href="#">
								<img src={gondol} />
								<div className="text-box">
									<h4 className="blog-post-title">Lorem</h4>
									<p className="blog-post-content">Sed mattis nunc Sed mattis nunc Sed mattis nunc Sed mattis nunc</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-item">
					<h3>POPULAR TAGS</h3>
					<ul className="tags">
						<li className="black">Travel</li>
						<li>New York</li>
						<li>Dinner</li>
						<li>Salmon</li>
						<li>France</li>
						<li>Drinks</li>
						<li>Ideas</li>
						<li>Flavors</li>
						<li>Chicken</li>
						<li>Dressing</li>
						<li>Fired</li>
						<li>Fish</li>
						<li>Duck</li>
					</ul>
				</div>
			</div>
		</FooterContainer>
	);
});

export default Footer;