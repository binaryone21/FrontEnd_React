import React from 'react';
import styled from 'styled-components';
import * as colors from "../../styles/colors";
import mq from "../../styles/MediaQuery";

import dataset from "../../dataset";
import parallax1 from "../../assert/img/parallax1.jpg"

const IntroduceContainer = styled.div`
  .title {
    height: 100vh;
    .hello {
      background-color: ${colors.GRAY};
    }
  }
  
  .about-me {
    max-width: 1100px;
    margin: auto;
    padding: 65px 40px;
    
    ${mq.maxWidth('md')`
      padding: 45px 20px;
    `}
    
    h2 {
	  font-size: 42px;
	  color: ${colors.DARK_GRAY};
	  margin-bottom: 40px;
	  text-align: center;

	  ${mq.maxWidth("md")`
        font-size: 36px;
        margin-bottom: 20px;
      `}
	}
    
    h3 {
      font-size: 30px;
      font-weight: 400;
      margin-bottom: 40px;
      font-style: italic;
      color: ${colors.GRAY};
      text-align: center;
      
      ${mq.maxWidth("md")`
	   font-size: 20px;
	   margin-bottom: 30px;
       font-weight: 300;
	  `}
    }
      
    p {
      line-height: 150%;
      font-size: 18px;
      margin-bottom: 45px;
      font-weight: 300;

      ${mq.maxWidth("md")`
		line-height: 135%;
	  	font-size: 16px;
	  	margin-bottom: 25px;  
	  `}
    }
      
    .about-box {
      display: flex;
      flex-wrap: wrap;
        
      .photo-box {
        width: 50%;
        padding: 0 35px;
          
        ${mq.maxWidth("md")`
          width: 100%;
          padding: 0 20px;
        `}
          
        h4 {
          font-size: 22px;
          color: ${colors.GRAY};
          margin-bottom: 20px;
            
          ${mq.maxWidth("md")`
            text-align: center;
          `}
            
          i {
            margin-right: 10px;
          }
        }
          
        img {
          width: 100%;
        }
      }
        
      p {
        width: 50%;
        padding-top: 40px;
          
        ${mq.maxWidth('md')`
          width: 100%;
        `}
      }
    }
  }
    
  .skill {
    max-width: 1100px;
    margin: auto;
    padding: 40px 40px 50px 40px;
      
    h2 {
      font-size: 32px;
      margin-bottom: 45px;
      text-align: center;
      color: ${colors.GRAY};
        
      ${mq.maxWidth("md")`
        font-size: 28px;
        margin-bottom: 35px;
      `}
    }
      
    .skill-section {
      h3 {
        font-size: 22px;
        margin-bottom: 15px;
        font-weight: 300;
        letter-spacing: 8px;
          
        ${mq.maxWidth("md")`
          font-size: 18px;
          margin-bottom: 10px;
        `}
      }
        
      .bar-container {
        height: 35px;
        background-color: ${colors.LIGHT_GRAY};
        margin-bottom: 30px;
        
        ${mq.maxWidth("md")`
          height: 25px;
          margin-bottom: 20px;
        `}
          
        .bar {
          height: 100%;
          background-color: ${colors.GRAY};
          text-align: center;
          color: ${colors.WHITE};
          display: flex;
          justify-content: center;
          align-items: center;
            
          &.w90p {
            width: 90%;
          }
            
          &.w85p {
            width: 85%;
          }
            
          &.w75p {
            width: 75%;
          }
        }
      }
    }
  }
    
  .point {
    background-color: ${colors.GRAY};
    
    .point-container {
      max-width: 1200px;
      margin: auto;
      padding: 60px 10px;
      display: flex;;
      flex-wrap: wrap;
      justify-content: space-between;
      
      ${mq.maxWidth('md')`
        padding: 20px 10px;
      `}
      
      .point-item {
        max-width: 25%;
        text-align: center;
        color: ${colors.WHITE};
        margin: 20px auto;
        
        ${mq.maxWidth("md")`
          width: 50%;
        `}
      
      	.point-value {
          font-size: 45px;
          font-weight: 500;
          margin-bottom: 25px;
          
          ${mq.maxWidth("md")`
            font-size: 38px;
            font-weight: 400;
            margin-bottom: 20px;
          `}
        }
        
        .point-text {
          font-size: 24px;
          font-weight: 300;
          
          ${mq.maxWidth("md")`
            font-size: 16px;
          `}
        }
      }
    }
  }
`;

const Introduce = React.memo(() => {
	const {hello, aboutme, photobox, skill, point} = dataset.introduce;

	return (
		<IntroduceContainer>
			<div className="title" style={{backgroundImage : `url(${parallax1})`}}>
				<div className="hello">
					<h1>{hello.msg1}</h1>
					<p>{hello.msg2}</p>
				</div>
			</div>

			<div className="about-me">
				<h2>{aboutme.title}</h2>
				<h3>{aboutme.subtitle}</h3>
				<p>{aboutme.content}</p>
				<div className="about-box">
					<div className="photo-box">
						<h4>
							<i className="fa-solid fa-user"></i>{photobox.myname}
						</h4>
						<img src={"/basic/_11_my_site_demo" + photobox.img} />
					</div>
					<p>{photobox.msg}</p>
				</div>
			</div>

			<div className="skill">
				<h2>{skill.title}</h2>
				<>
					{skill.section.map((v, i) => {
						return (
							<div className="skill-section" key={i}>
								<h3>
									<i className={`fa-solid ${v.icon}`}></i>
									<span>{v.name}</span>
								</h3>
								<div className="bar-container">
									<div className={`bar w${v.state}p`}>{v.state}%</div>
								</div>
							</div>
						);
					})}
				</>
			</div>

			<div className="point">
				<div className="point-container">
					{point.map((v, i) => {
						return (
							<div className="point-item" key={i}>
								<div className="point-value">{v.value}</div>
								<div className="point-text">{v.text}</div>
							</div>
						);
					})}
				</div>
			</div>
		</IntroduceContainer>
	);
});

export default Introduce;