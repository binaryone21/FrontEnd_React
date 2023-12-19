import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = '/';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("MovieRankSlice/getList", async (payload, { rejectWithValue }) => {
	let result = null;

	try {
		const response = await axios.get(process.env.REACT_APP_KOBIS_API_URL, {
			params : {
				key : process.env.REACT_APP_KOBIS_APU_KEY,
				// 컨트롤러에서 전달하는 파라미터는 payload 로 전달된다ㅏ.
				// --> 단일 값인 경우 payload 자체가 그 값, JSON 인 경우 payload 가 JSON 이 된다.
				targetDt : payload.targetDt
			}
		});
		result = response.data;

		// 영화진흥위원회 API 는 에러가 발생하더라도 HTTP 상태코드는 200으로 응답이 오기 때문에 catch 문이 동작하지 않는다.
		// 그러므로 직접 에러를 감지해야 한다.
		if(result.faultInfo !== undefined) {
			const err = new Error();
			err.response = {status: 500, statusText: result.faultInfo.message};
			throw err;
		}
	} catch (err) {
		// 에러 발생시 'rejectWithValue()' 함수에 에러 데이터를 전달하면 extraReducer 의 rejected 의 함수가 호출된다.
		result = rejectWithValue(err.response);
	}

	return result;
});

/** Slice 정의 */
const MovieRankSlice = createSlice({
	name: 'MovieRankSlice',
	initialState: {
		data: null,         // Ajax 처리를 통해 수신된 데이터
		loading: false,     // 로딩 여부
		error: null         // 에러 정보
	},
	// 외부 action 및 비동기 action (Ajax 용)
	extraReducers: (builder) => {
		builder.addCase(getList.pending, (state, { payload }) => {
			return { ...state, loading: true }
		});
		builder.addCase(getList.fulfilled, (state, { payload }) => {
			return {
				data: payload,
				loading: false,
				error: null
			}
		});
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

// 리듀서 객체 내보내기
export default MovieRankSlice.reducer;