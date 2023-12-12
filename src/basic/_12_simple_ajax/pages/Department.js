import React from 'react';
import styled from 'styled-components';

const DepartmentContainer = styled.div`

`;

const Department = React.memo(() => {
	return (
		<DepartmentContainer>
			...
		</DepartmentContainer>
	);
});

export default Department;