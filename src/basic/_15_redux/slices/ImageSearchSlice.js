import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("ImageSearchSlice/getList", async (payload, { rejectWithValue }) => {
	let result = null;

	try {
		const response = await axios.get(process.env.REACT_APP_KAKAO_IMAGE_SEARCH_API_URL, {
			params : {
				query: payload.query,
				page : 1
			},
			headers : {
				Authorization : `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
			}
		});
		result = response.data;
	} catch (err) {
		result = rejectWithValue(err.response);
	}

	return result;
});

const ImageSearchSlice = createSlice({
	name: 'ImageSearchSlice',
	// 이 모듈이 관리하고자하는 상태값들을 명시
	initialState: {
		data: null,
		loading: false,
		error: null
	},
	// 상태값을 갱신하기 위한 함수들을 구현
	// Ajax의 처리 과정에 따라 자동으로 실행된다.
	extraReducers: (builder) => {
		// 로딩중임을 표시
		builder.addCase(getList.pending, (state, { payload }) => {
			return { ...state, loading: true }
		});

		// 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
		builder.addCase(getList.fulfilled, (state, { payload }) => {
			return {
				data: payload,
				loading: false,
				error: null
			}
		});

		// 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
		builder.addCase(getList.rejected, (state, { payload }) => {
			return {
				data: payload,
				loading: false,
				error: {
					code: payload?.status ? payload.status : 500,
					message: payload?.statusText ? payload.statusText : 'Server Error'
				}
			}
		});
	},
});

export default ImageSearchSlice.reducer;