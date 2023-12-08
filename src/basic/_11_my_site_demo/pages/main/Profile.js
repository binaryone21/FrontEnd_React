import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #f0f3;
`;

const Profile = React.memo(() => {
	return (
		<ProfileContainer>
			<h1>Profile</h1>
		</ProfileContainer>
	);
});

export default Profile;