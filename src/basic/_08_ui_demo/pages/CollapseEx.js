import React from 'react';
import Collapse from '../components/Collapse';

/** 표시할 내용(데이터) */
const content = [{
	title: 'Open Collapsible',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
	title: 'Open Collapsible',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
	title: 'Open Collapsible',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
	title: 'Open Collapsible',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}, {
	title: 'Open Collapsible',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}];

const CollapseEx = React.memo(() => {
	return (
		<div>
			<h2>CollapseEx</h2>
			{content.map(({ title, content }, i) => <Collapse key={i} title={title} content={content} />)}
		</div>
	);
});

export default CollapseEx;