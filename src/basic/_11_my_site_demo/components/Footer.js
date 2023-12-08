import React from 'react';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const FooterContainer = styled.footer`
  background-color: ${colors.BLACK};
  text-align: center;
  padding: 50px 10px;
  
  .to-the-top {
    display: inline-block;
    background-color: ${colors.LIGHT_GRAY};
    padding: 10px 25px;
    font-size: 18px;
    color: ${colors.GRAY};
    margin-bottom: 10px;
    
    i {
      margin-right: 10px;
    }
    
    &:hover {
      background-color: ${colors.GREEN};
      color: ${colors.BLACK};
    }
  }
  
  .social-list {
    display: flex;
    justify-content: center;
    
    a {
      color: ${colors.WHITE};
      display: block;
      font-size: 35px;
      margin: 20px 10px 40px 10px;
      
      &:hover {
        color: ${colors.GREEN};
      }
    }
  }
  
  address {
    color: ${colors.WHITE};
    font-size: 18px;
  }
`;

const Footer = React.memo(() => {
	return (
		<FooterContainer>
			<a href="#" className="to-the-top">
				<i className="fa-sharp fa-solid fa-arrow-uo"></i>To the top
			</a>
			<ul className="social-list">
				<li>
					<a href="#">
						<i className="fa-brands fa-square-facebook"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa-brands fa-square-instagram"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa-brands fa-square-snapchat"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa-brands fa-square-pinterest"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa-brands fa-square-twitter"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa-brands fa-linkedin"></i>
					</a>
				</li>
			</ul>
			<address>copyright&copy;megait</address>
		</FooterContainer>
	);
});

export default Footer;