import React from 'react';
import dayjs from 'dayjs';

/**
 * useReduce() 기능을 사용하여 상황에 따라 state 값을 다르게 설정하는 함수
 */
const setDateValue = (state, action) => {
	const day = dayjs();

	let newDate = null;

	switch(action) {
		case 'Day7'   : newDate = day.add(-7, 'd').format('YYYY-MM-DD'); break;
		case 'Day15'  : newDate = day.add(-15, 'd').format('YYYY-MM-DD'); break;
		case 'Month1' : newDate = day.add(-1, 'M').format('YYYY-MM-DD'); break;
		case 'Month3' : newDate = day.add(-3, 'M').format('YYYY-MM-DD'); break;
		case 'Month6' : newDate = day.add(-6, 'M').format('YYYY-MM-DD'); break;
		default       : newDate = day.format('YYYY-MM-DD'); break;
	}

	return { ...state, startDate:newDate};
};

const DateRange2 = () => {
	const day = dayjs();

	const [myDate, setMyDate] = React.useReducer(setDateValue, {
		startDate: day.format('YYYY-MM-DD'),
		endDate: day.format('YYYY-MM-DD'),
	});

	return (
		<div>
			<h2>DateRange2</h2>
			<p>{myDate.startDate} ~ {myDate.endDate}</p>
			<p>
				<button type="button" onClick={(e) => setMyDate('Day7')}>7일</button>
				<button type="button" onClick={(e) => setMyDate('Day15')}>15일</button>
				<button type="button" onClick={(e) => setMyDate('Month1')}>1개월</button>
				<button type="button" onClick={(e) => setMyDate('Month3')}>3개월</button>
				<button type="button" onClick={(e) => setMyDate('Month6')}>6개월</button>
			</p>
		</div>
	);
};

export default DateRange2;