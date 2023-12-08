import React from 'react';
import styled from 'styled-components';

const IntroduceContainer = styled.div`
  background-color: #0603;
`;

const Introduce = React.memo(() => {
	return (
		<IntroduceContainer>
			<h1>Introduce</h1>
		</IntroduceContainer>
	);
});

export default Introduce;