import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: #06f3;
`;

const Contact = React.memo(() => {
	return (
		<ContactContainer>
			<h1>Contact</h1>
		</ContactContainer>
	);
});

export default Contact;