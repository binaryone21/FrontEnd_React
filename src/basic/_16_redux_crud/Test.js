import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getList, getItem, postItem, putItem, deleteItem } from './slices/DepartmentSlice';

const Test = React.memo(() => {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector(state => state.DepartmentSlice);

	React.useEffect(() => {
		dispatch(getList());

		dispatch(getItem({id: 101}));

		dispatch(postItem({dname : 'Rect.js', loc: '1403호'}));

		dispatch(putItem({id:203, dname:'React.js수정', loc:'1406호'}))

		dispatch(deleteItem({id: 203}));
	}, [dispatch]);

	return (
		loading ? 'loading...' : (
			error ? JSON.stringify(error) : (
				<>
					{ JSON.stringify(data)}
				</>
			)
		)
	);
});

export default Test;