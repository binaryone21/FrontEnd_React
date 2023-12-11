import React from 'react';
import styled from 'styled-components';
import * as colors from '../../styles/colors';
import mq from "../../styles/MediaQuery";
import dataset from "../../dataset";
import parallax2 from "../../assert/img/parallax2.jpg";

const ProfileContainer = styled.div`
  .content {
	max-width: 1200px;
    margin: auto;
    padding: 60px 20px;
    
    ${mq.maxWidth("md")`
      padding: 30px 10px;
    `}
    
    h1 {
      text-align: center;
      font-size: 40px;
      margin-bottom: 32px;
      color: ${colors.DARK_GRAY};
      
      ${mq.maxWidth("md")`
        font-size: 30px;
        margin-bottom: 24px;
      `}
    }
    
    p {
      text-align: center;
      margin-bottom: 24px;
      font-size: 20px;
      color: ${colors.GRAY};
      font-weight: 300;
      font-style: italic;
      
      ${mq.maxWidth("md")`
        font-size: 16px;
        margin-bottom: 20px;
      `}
    }
    
    .gallery {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      
      li {
        width: 25%;
        padding: 10px;
        
        ${mq.maxWidth("md")`
            width: 50%;
        `}
        
        a {
          // border: 3px solid red;
          display: block;
          overflow: hidden;
          
          img {
            width: 100%;
            transition: all 0.3s ease-in-out;
            
            &:hover {
              transform: scale(1.2, 1.2);
            }
          }
        }
      }
    }
  }
`;

const Portfolio = React.memo(() => {
	const {hello, work} = dataset.portfolio;
	return (
		<ProfileContainer>
			<div className="title" style={{backgroundImage: `url(${parallax2})`}}>
				<div className="hello">
					<h1>{hello.msg1}</h1>
					<p>{hello.msg2}</p>
				</div>
			</div>
			<div className="content">
				<h1>{work.title}</h1>
				<p>{work.msg1}</p>
				<p>{work.msg2}</p>
				<ul className="gallery">
					{work.gallery.map((v, i) => {
						return (
							<li key={i}>
								<a href="#">
									<img src={"/basic/_11_my_site_demo" + v.img} />
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</ProfileContainer>
	);
});

export default Portfolio;