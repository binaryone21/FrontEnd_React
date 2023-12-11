import React from 'react';
import styled from 'styled-components';
import * as colors from "../../styles/colors";
import mq from "../../styles/MediaQuery";
import dataset from "../../dataset";
import parallax3 from "../../assert/img/parallax3.jpg";

const ContactContainer = styled.div`
  .content {
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    
    .map {
      width: 50%;
      height: 40vh;
      padding: 20px;
      
      ${mq.maxWidth('md')`
        width: 100%;
      `}
      
      img {
        width: 100%;
      }
    }
    
    .contact {
      width: 50%;
      padding: 20px;
      
      ${mq.maxWidth('md')`
        width: 100%;
      `}
      
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        
        li {
          font-size: 26px;
          color: ${colors.GRAY};
          padding-left: 25px;
          line-height: 150%;
          
          i {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

const Contact = React.memo(() => {
	const { hello, map, address, phone, email } = dataset.contact;

	return (
		<ContactContainer>
			<div className="title" style={{backgroundImage: `url(${parallax3}`}}>
				<div class="hello">
					<h1>{hello.msg1}</h1>
					<p>{hello.msg2}</p>
				</div>
			</div>
			<div className="content">
				<div className="map">
					<iframe src={map} width="100%" style={{border: '0px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div className="contact">
					<ul>
						<li>
							<i className="fa-solid fa-location-dot"></i>
							{ address }
						</li>
						<li>
							<i className="fa-solid fa-phone"></i>
							<a href={`tel:${ phone }`}>Phone : {phone}</a>
						</li>
						<li>
							<i className="fa-solid fa-envelope"></i>
							<a href={`mailto:${ email }`}>Email : {email}</a>
						</li>
					</ul>
				</div>
			</div>
		</ContactContainer>
	);
});

export default Contact;