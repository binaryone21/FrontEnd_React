import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fullfilled, rejected } from "../helper/ReduxHelper";
import { cloneDeep } from 'lodash';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, { rejectWithValue }) => {
	let result = null;
	const URL = process.env.REACT_APP_API_DEPARTMENT_LIST;

	// '/pages/DepartmentList.js'에서 검색어를 {keyword:검색어값} 형태로 전달하면 payload 객체를 통해 넘어온다.
	// --> payload.keyword
	// 여기서는 그 값을 학과명 검색어로 활용
	let params = null;

	// payload 객체가 null 이나 undefined 가 아니고, 그 안의 keyword 값이 존재한다면?
	if(payload?.keyword) {
		// axios 에 설정할 querystring 데이터 구성
		params = {
			dname : payload.keyword
		}
	}
	try {
		const response = await axios.get(URL, {
			params : params
		});
		result = response.data;
	} catch (err) {
		result = rejectWithValue(err.response);
	}

	return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk("DepartmentSlice/getItem", async (payload, { rejectWithValue }) => {
	let result = null;
	const URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(':id', payload.id);

	try {
		const response = await axios.get(URL);
		result = response.data;
	} catch (err) {
		result = rejectWithValue(err.response);
	}

	return result;
});

/** 데이터 저장를 위한 비동기 함수 */
export const postItem = createAsyncThunk("DepartmentSlice/postItem", async (payload, { rejectWithValue }) => {
	let result = null;
	const URL = process.env.REACT_APP_API_DEPARTMENT_LIS;

	try {
		const response = await axios.post(URL, {
			dname: payload.dname,
			loc: payload.loc
		});
		result = response.data;
	} catch (err) {
		result = rejectWithValue(err.response);
	}

	return result;
});

/** 데이터 수정를 위한 비동기 함수 */
export const putItem = createAsyncThunk("DepartmentSlice/putItem", async (payload, { rejectWithValue }) => {
	let result = null;
	const URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(':id', payload.id);

	try {
		const response = await axios.put(URL, {
			dname: payload.dname,
			loc: payload.loc
		});
		result = response.data;
	} catch (err) {
		result = rejectWithValue(err.response);
	}

	return result;
});

/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk("DepartmentSlice/deleteItem", async (payload, { rejectWithValue }) => {
	let result = null;
	const URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(':id', payload.id);

	try {
		const response = await axios.delete(URL);
		result = response.data;
	} catch (err) {
		result = rejectWithValue(err.response);
	}

	return result;
});

const DepartmentSlice = createSlice({
	name: 'DepartmentSlice',
	initialState: {
		data: null,
		loading: false,
		error: null
	},
	reducers: {
		getCurrentData: (state, action) => {
			return state;
		}
	},
	extraReducers: (builder) => {
		/** 다중행 데이터 조회를 위한 액션 함수 */
		builder.addCase(getList.pending, pending);
		builder.addCase(getList.fulfilled, fullfilled);
		builder.addCase(getList.rejected, rejected);

		/** 단일행 데이터 조회를 위한 액션 함수 */
		builder.addCase(getItem.pending, pending);
		builder.addCase(getItem.fulfilled, fullfilled);
		builder.addCase(getItem.rejected, rejected);

		/** 데이터 저장을 위한 액션 함수 */
		builder.addCase(postItem.pending, pending);
		builder.addCase(postItem.fulfilled, (state, {meta, payload}) => {
			// 기존의 상태값을 복사한다. (원본이 JSON 이므로 깊은 복사를 수행해야 한다)
			const data = cloneDeep(state.data);
			console.log(data);

			// 새로 저장된 결과를 기존 상태값 배열의 맨 뒤에 추가한다.
			data.push(payload);
			return {
				data: data,
				loading: false,
				error: null
			}
		});
		builder.addCase(postItem.rejected, rejected);

		/** 데이터 수정을 위한 액션 함수 */
		builder.addCase(putItem.pending, pending);
		builder.addCase(putItem.fulfilled, fullfilled);
		builder.addCase(putItem.rejected, rejected);

		/** 데이터 삭제를 위한 액션 함수 */
		builder.addCase(deleteItem.pending, pending);
		builder.addCase(deleteItem.fulfilled, fullfilled);
		builder.addCase(deleteItem.rejected, rejected);
	},
});

export const { getCurrentData } = DepartmentSlice.actions;
export default DepartmentSlice.reducer;