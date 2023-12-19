import React from 'react';

const ErrorView = React.memo(({ error }) => {
	return (
		<div>
			<h1>Oops~!!! { error.code } Error. </h1>
			<hr />
			<p>{ error.message }</p>
		</div>
	);
});

export default ErrorView;